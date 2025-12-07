<?php

function issue_162(): void
{
    $timesOff = $this->bamboo
        ->send(new TimeOffRequest(from: $from, to: $to))
        ->collect();

    expect($response->dto()->get(2))
        ->id->toBe(21)
        ->name->toBe('Payslips')
        ->files->toHaveCount(1)
        ->files->first()->toBeInstanceOf(FileData::class);

    expect(config('filesystems.disks.' . Disk::BASE_NAME))
        ->toBeArray()
        ->host->not->toBeNull();

    return [
        'http_code' => $this->response->status(),
        'request_body' => $this->response
            ->getPsrRequest()
            ->getBody()
            ->__toString(),
        'response_body' => $this->response->body(),
        'original_exception_message' => $this->originalException?->getMessage(),
        'original_exception_serialized' => $this->originalException?->__toString(),
    ];

    $this->connector
        ->pool(
            requests: $legs->map(fn (int $legId) => new GetLegRequest($legId)),
            responseHandler: function (Response $response) use (&$passengers) {
                $passengers = [
                    ...($passengers ?? []),
                    ...$response->json('Pax'),
                ];
            },
        )
        ->send()
        ->wait();

    expect($response->json())
        ->ok->toBeTrue()
        ->channel->toBe('C08CL4QQH8F')
        ->message->text->toBe('Hello world');

    expect($response->dto())
        ->toBeInstanceOf(LegData::class)
        ->flight_number->toBe('FSF492J')
        ->tail_number->toBe('OH-TUA')
        ->arrives_at->toBeInstanceOf(Carbon\CarbonImmutable::class)
        ->arrives_at->equalTo('2024-05-14 13:55:00')->toBeTrue();
}
