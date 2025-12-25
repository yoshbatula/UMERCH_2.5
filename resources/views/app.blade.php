<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>UMERCH</title>
        <link rel="icon" type="image/png" href="{{ Vite::asset('resources/images/UMERCH-LOGO.svg') }}"/>
        @viteReactRefresh()
        @vite('resources/js/app.jsx')
        @vite('resources/css/app.css')
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>