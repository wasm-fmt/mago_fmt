<?php

function matches(string $subject, string $pattern, int $offset = 0): bool
{

    return Internal\call_preg('preg_match', static fn(): int|false => preg_match(
        $pattern,
        $subject,
        $_,
        0,
        $offset,
    )) === 1;
}

if (

$suuuuuuupppperrrrLonnnnnnngggggggggggggggggggggggVariableeeeeeeeName ||
$anotherSuuuuuuupppperrrrLonnnnnnngggggggggggggggggggggggVariableeeeeeeeName ||
$otherSuuuuuuupppperrrrLonnnnnnngggggggggggggggggggggggVariableeeeeeeeName ||
$thisSuuuuuuupppperrrrLonnnnnnngggggggggggggggggggggggVariableeeeeeeeName ||
$thatSuuuuuuupppperrrrLonnnnnnngggggggggggggggggggggggVariableeeeeeeeName
) {}


if (

$suuuuuuupppperrrrLonnnnnnngggggggggggggggggggggggVariableeeeeeeeName ||
$anotherSuuuuuuupppperrrrLonnnnnnngggggggggggggggggggggggVariableeeeeeeeName ||
$otherSuuuuuuupppperrrrLonnnnnnngggggggggggggggggggggggVariableeeeeeeeName && (
$thisSuuuuuuupppperrrrLonnnnnnngggggggggggggggggggggggVariableeeeeeeeName ||
$thatSuuuuuuupppperrrrLonnnnnnngggggggggggggggggggggggVariableeeeeeeeName)
) {}
