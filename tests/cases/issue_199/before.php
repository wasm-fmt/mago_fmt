<?php

$sentTo = arr($addresses)->map(fn (Address|string $address) => match (true) {
    $address instanceof Address => $address->getAddress(),
    default => $address,
})->toArray();
