<?php

class Foo
{
    public function getCreatedAt(): null|\DateTimeImmutable
    {
        return $this->created_at;
    }
}
