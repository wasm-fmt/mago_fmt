<?php

function something(): void
{
    $result = App::call(
        new DeployMosquito(
            new WebhookData(
                artifactUuid: $uuid,
                deploymentTarget: $target,
                service: Service::ERP
            )
        )
    );
}
