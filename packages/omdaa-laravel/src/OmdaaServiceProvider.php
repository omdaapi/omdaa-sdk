<?php

namespace Omdaa\Laravel;

use Illuminate\Support\ServiceProvider;

class OmdaaServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/omdaa.php', 'omdaa');

        $this->app->singleton(OmdaaManager::class, function ($app) {
            $config = $app['config']['omdaa'];
            return new OmdaaManager(
                $config['api_key'] ?? '',
                $config['base_url'] ?? 'https://omdaa.com/api/v1'
            );
        });
    }

    public function boot(): void
    {
        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__ . '/../config/omdaa.php' => $this->app->configPath('omdaa.php'),
            ], 'omdaa-config');
        }
    }
}
