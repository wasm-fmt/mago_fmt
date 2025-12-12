<?php

return null !== $payload['repository']['ref']
    /** @phpstan-ignore-next-line */
    ? Tag::fromPayload($payload['repository']['ref'])
    : null;

match ($foo) {
    'bar'
        // This is a comment explaining
        // Why we are returning 'baz'
        => 'baz',
    'qux' => 'quux',
};
