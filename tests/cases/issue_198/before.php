<?php

$this->container->singleton(ResponseSender::class, fn () => new class($this) implements ResponseSender {
    public function __construct(
        private HttpExceptionHandlerTest $case,
    ) {}

    public function send(Response $response): Response
    {
        $this->case->response = $response;

        return $response;
    }
});