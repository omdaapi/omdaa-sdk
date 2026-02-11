package omdaa

import "testing"

func TestNewOmdaaClient(t *testing.T) {
	client := NewOmdaaClient("test-key", "")
	if client == nil {
		t.Fatal("NewOmdaaClient returned nil")
	}
	if client.Messages == nil || client.Sessions == nil || client.Webhooks == nil {
		t.Error("expected resources to be non-nil")
	}
	if client.ApiKeys == nil || client.Auth == nil || client.Ai == nil {
		t.Error("expected ApiKeys, Auth, Ai to be non-nil")
	}
}

func TestOmdaaError_Error(t *testing.T) {
	e := &OmdaaError{Message: "bad request", StatusCode: 400}
	if e.Error() == "" {
		t.Error("Error() should not be empty")
	}
}
