# omdaa-go

Official Go client for the [Omdaa](https://omdaa.com) WhatsApp Business API.

## Installation

```bash
go get github.com/omdaa/omdaa-go
```

## Quick Start

```go
package main

import (
	"fmt"
	"github.com/omdaa/omdaa-go"
)

func main() {
	client := omdaa.NewOmdaaClient("your-api-key", "")
	// Optional base URL: omdaa.NewOmdaaClient("your-api-key", "https://omdaa.com/api/v1")

	sessions, err := client.Sessions.List()
	if err != nil {
		if e, ok := err.(*omdaa.OmdaaError); ok {
			fmt.Println(e.StatusCode, e.Message)
		}
		return
	}

	result, err := client.Messages.SendText(map[string]interface{}{
		"sessionId": "default",
		"to":        "201234567890",
		"message":   "Hello from Omdaa Go!",
	})
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(result)

	client.Webhooks.Set(map[string]interface{}{
		"url":     "https://yoursite.com/webhook",
		"enabled": true,
	})
}
```

## API Resources

Same as other SDKs: `Messages`, `Sessions`, `Webhooks`, `Templates`, `Scheduled`, `Bulk`, `Contacts`, `Groups`, `Chats`, `Business`, `Storage`, `Labels`, `Integrations`, `Queue`, `Interactive`, `ApiKeys`, `Profile`, `Dashboard`, `Plans`, `Billing`, `Referral`, `Notifications`, `Metrics`, `Backup`, `Security`, `Audit`, `Organizations`, `Settings`, `Channels`, `Privacy`, `Support`, `Proxy`, `Calls`, `Auth`, `Users`, `Email`, `Ai`.

## Requirements

- Go 1.21+

## Tests

```bash
go test -v ./...
```

## License

MIT
