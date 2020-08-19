# Update the VARIANT arg in devcontainer.json to pick an Alpine version: 3.10, 3.11, 3.12
# To fully customize the contents of this image, use the following Dockerfile instead:
# https://github.com/microsoft/vscode-dev-containers/tree/v0.128.0/containers/alpine/.devcontainer/base.Dockerfile
ARG VARIANT="3.12"
FROM mcr.microsoft.com/vscode/devcontainers/base:0-alpine-${VARIANT} as dev-stage

RUN apk update
RUN apk add --no-cache nodejs
RUN apk add --no-cache yarn
RUN yarn install 