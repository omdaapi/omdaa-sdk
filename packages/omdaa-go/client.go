package omdaa

import (
	"bytes"
	"encoding/json"
	"io"
	"net/http"
	"net/url"
	"strings"
)

const DefaultBaseURL = "https://omdaa.com/api/v1"

// Client is the low-level HTTP client with Bearer auth.
type Client struct {
	APIKey   string
	BaseURL  string
	HTTP     *http.Client
}

// NewClient creates a new Client.
func NewClient(apiKey string, baseURL string) *Client {
	if baseURL == "" {
		baseURL = DefaultBaseURL
	}
	baseURL = strings.TrimSuffix(baseURL, "/")
	return &Client{
		APIKey:  apiKey,
		BaseURL: baseURL,
		HTTP:    &http.Client{},
	}
}

// Request sends an authenticated request and decodes JSON response.
func (c *Client) Request(method, path string, body interface{}, params map[string]string) (map[string]interface{}, error) {
	u := c.BaseURL + path
	if len(params) > 0 {
		q := url.Values{}
		for k, v := range params {
			if v != "" {
				q.Set(k, v)
			}
		}
		if qq := q.Encode(); qq != "" {
			u += "?" + qq
		}
	}
	var bodyReader io.Reader
	if body != nil && method != http.MethodGet {
		b, err := json.Marshal(body)
		if err != nil {
			return nil, err
		}
		bodyReader = bytes.NewReader(b)
	}
	req, err := http.NewRequest(method, u, bodyReader)
	if err != nil {
		return nil, err
	}
	req.Header.Set("Authorization", "Bearer "+c.APIKey)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Accept", "application/json")
	resp, err := c.HTTP.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	data, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}
	var out map[string]interface{}
	if len(data) > 0 {
		if err := json.Unmarshal(data, &out); err != nil {
			return nil, err
		}
	}
	if resp.StatusCode < 200 || resp.StatusCode >= 300 {
		msg := ""
		if m, ok := out["message"].(string); ok {
			msg = m
		}
		if msg == "" {
			msg = string(data)
		}
		return nil, &OmdaaError{Message: msg, StatusCode: resp.StatusCode, Body: out}
	}
	return out, nil
}

// Get performs a GET request.
func (c *Client) Get(path string, params map[string]string) (map[string]interface{}, error) {
	return c.Request(http.MethodGet, path, nil, params)
}

// Post performs a POST request.
func (c *Client) Post(path string, body interface{}) (map[string]interface{}, error) {
	return c.Request(http.MethodPost, path, body, nil)
}

// Put performs a PUT request.
func (c *Client) Put(path string, body interface{}) (map[string]interface{}, error) {
	return c.Request(http.MethodPut, path, body, nil)
}

// Delete performs a DELETE request (optional body).
func (c *Client) Delete(path string, body interface{}) (map[string]interface{}, error) {
	return c.Request(http.MethodDelete, path, body, nil)
}
