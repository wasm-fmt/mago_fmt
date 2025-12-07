<?php

declare(strict_types=1);

namespace Psl\Json;

use PHPUnit\Framework\TestCase;
use Psl\Collection\MapInterface;
use Psl\Collection\VectorInterface;
use Psl\Json;
use Psl\Type;

final class TypedTest extends TestCase
{
    public function testTyped(): void
    {
        /** @var MapInterface $actual */
        $actual = Json\typed('{
            "name": "azjezz/psl",
            "type": "library",
            "description": "PHP Standard Library.",
            "keywords": ["php", "std", "stdlib", "utility", "psl"],
            "license": "MIT"
        }', Type\map(Type\string(), Type\union(Type\string(), Type\vector(Type\string()))));
    }

    public function testTypedThrowsWhenUnableToCoerce(): void
    {
        Json\typed('{
            "name": "azjezz/psl",
            "type": "library",
            "description": "PHP Standard Library.",
            "keywords": ["php", "std", "stdlib", "utility", "psl"],
            "license": "MIT"
        }', Type\map(Type\string(), Type\int()));
    }
}
