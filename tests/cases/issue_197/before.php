<?php

final class ErrorResponseRenderer
{
    public function renderErrorResponse(Status $status, null|HttpException $exception = null): GenericResponse
    {
        return new GenericResponse(
            status: $status,
            body: new GenericView(__DIR__ . '/HttpErrorResponse/error.view.php', [
                'css' => $this->getCss(),
                'status' => $status->value,
                'title' => $status->description(),
                'message' => $exception?->getMessage() ?: match ($status) {
                    Status::INTERNAL_SERVER_ERROR => 'An unexpected server error occurred',
                    Status::NOT_FOUND => 'This page could not be found on the server',
                    Status::FORBIDDEN => 'You do not have permission to access this page',
                    Status::UNAUTHORIZED => 'You must be authenticated in to access this page',
                    default => null,
                },
            ]),
        );
    }
}
