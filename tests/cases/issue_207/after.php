<?php

class X
{
    public function __construct(string $fqcn)
    {
        parent::__construct('Redis client not found.' . match ($fqcn) {
            \Redis::class => ' You may be missing the `redis` extension.',
            Predis\Client::class => ' You may need to install the `predis/predis` package.',
        });
    }
}
