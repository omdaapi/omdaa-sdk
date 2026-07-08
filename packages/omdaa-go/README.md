# omdaa-go

Official Go client for the [Omdaa](https://omdaa.com) WhatsApp Business API. **Free forever** — unlimited sessions, messages, and Omdaa AI.

## Installation

```bash
go get github.com/omdaapi/omdaa-sdk/packages/omdaa-go@v1.1.1
```

## Quick Start

```go
package main

import (
	"fmt"
	omdaa "github.com/omdaapi/omdaa-sdk/packages/omdaa-go"
)

func main() {
	client := omdaa.NewOmdaaClient("your-api-key", "")
	// Optional: omdaa.NewOmdaaClient("your-api-key", "https://omdaa.com/api/v1")

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
}
```

## Module path

Monorepo source: [github.com/omdaapi/omdaa-sdk](https://github.com/omdaapi/omdaa-sdk) · `packages/omdaa-go`

## Requirements

- Go 1.21+

## Tests

```bash
go test -v ./...
```

## License

Apache-2.0
