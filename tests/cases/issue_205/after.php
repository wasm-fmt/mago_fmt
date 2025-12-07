<?php

if ($this->container->get(AppConfig::class)->environment->isTesting()) {
    return $this;
}
