<?php

$user = User::query()->updateOrCreate([
    'azure_id' => $azureUser->id,
], [
    'name' => $azureUser->name,
    'email' => $azureUser->email,
    'azure_token' => $azureUser->token,
    'azure_groups' => $this->extractAzureGroups($azureUser->token),
]);

$values = array_map(fn (mixed $value) => match (true) {
    $value instanceof BackedEnum => $value->value,
    $value instanceof UnitEnum => $value->name,
    default => $value,
}, $values);