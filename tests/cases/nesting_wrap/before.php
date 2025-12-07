<?php

$data = [
         'response_body' => false !== $responseBody && '' !== $responseBody && 'GET' !== $request->getMethod() ? $responseBody : null,
     ];