<?php

                return new RocketReachException(
                    response: $response,
                    originalException: $exception,
                    message: rescue(
                        callback: fn () => json_encode($response->json('error') ?: [], flags: \JSON_PRETTY_PRINT),
                        report: false,
                    ) ?: $exception?->getMessage() ?: 'Unknown RocketReach API error',
                );
