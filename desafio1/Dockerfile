# syntax=docker/dockerfile:1

FROM golang:1.19.0-alpine3.16 AS builder

WORKDIR /app

RUN go mod init hello

COPY hello.go .

RUN go build -o /go/bin/hello

FROM scratch

COPY --from=builder /go/bin/hello /go/bin/hello

CMD ["/go/bin/hello"]