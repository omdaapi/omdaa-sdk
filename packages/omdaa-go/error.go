package omdaa

import "fmt"

// OmdaaError is returned when the API returns an error response.
type OmdaaError struct {
	Message    string
	StatusCode int
	Body       map[string]interface{}
}

func (e *OmdaaError) Error() string {
	if e.StatusCode > 0 {
		return fmt.Sprintf("%s (status %d)", e.Message, e.StatusCode)
	}
	return e.Message
}
