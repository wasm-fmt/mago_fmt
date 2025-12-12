<?php

class Example
{
    private function initializeResponseFactory(): ResponseFactoryInterface
    {
        return Discover::httpResponseFactory() ?? throw new RuntimeException(
            'The PSR request factory cannot be null. Please ensure that it is properly initialized.',
        );
    }
}
