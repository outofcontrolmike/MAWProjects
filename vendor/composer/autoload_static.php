<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit976b4bd07c8be7fcec6f1a13134a038c
{
    public static $files = array (
        '72142d7b40a3a0b14e91825290b5ad82' => __DIR__ . '/..' . '/cakephp/core/functions.php',
        'cf97c57bfe0f23854afd2f3818abb7a0' => __DIR__ . '/..' . '/zendframework/zend-diactoros/src/functions/create_uploaded_file.php',
        '9bf37a3d0dad93e29cb4e1b1bfab04e9' => __DIR__ . '/..' . '/zendframework/zend-diactoros/src/functions/marshal_headers_from_sapi.php',
        'ce70dccb4bcc2efc6e94d2ee526e6972' => __DIR__ . '/..' . '/zendframework/zend-diactoros/src/functions/marshal_method_from_sapi.php',
        'f86420df471f14d568bfcb71e271b523' => __DIR__ . '/..' . '/zendframework/zend-diactoros/src/functions/marshal_protocol_version_from_sapi.php',
        'b87481e008a3700344428ae089e7f9e5' => __DIR__ . '/..' . '/zendframework/zend-diactoros/src/functions/marshal_uri_from_sapi.php',
        '0b0974a5566a1077e4f2e111341112c1' => __DIR__ . '/..' . '/zendframework/zend-diactoros/src/functions/normalize_server.php',
        '1ca3bc274755662169f9629d5412a1da' => __DIR__ . '/..' . '/zendframework/zend-diactoros/src/functions/normalize_uploaded_files.php',
        '40360c0b9b437e69bcbb7f1349ce029e' => __DIR__ . '/..' . '/zendframework/zend-diactoros/src/functions/parse_cookie_header.php',
        '948ad5488880985ff1c06721a4e447fe' => __DIR__ . '/..' . '/cakephp/utility/bootstrap.php',
    );

    public static $prefixLengthsPsr4 = array (
        'Z' => 
        array (
            'Zend\\Diactoros\\' => 15,
        ),
        'P' => 
        array (
            'Psr\\Http\\Server\\' => 16,
            'Psr\\Http\\Message\\' => 17,
            'Psr\\Http\\Client\\' => 16,
        ),
        'C' => 
        array (
            'Cake\\Utility\\' => 13,
            'Cake\\Core\\' => 10,
        ),
        'A' => 
        array (
            'Authentication\\' => 15,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Zend\\Diactoros\\' => 
        array (
            0 => __DIR__ . '/..' . '/zendframework/zend-diactoros/src',
        ),
        'Psr\\Http\\Server\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/http-server-handler/src',
            1 => __DIR__ . '/..' . '/psr/http-server-middleware/src',
        ),
        'Psr\\Http\\Message\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/http-message/src',
            1 => __DIR__ . '/..' . '/psr/http-factory/src',
        ),
        'Psr\\Http\\Client\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/http-client/src',
        ),
        'Cake\\Utility\\' => 
        array (
            0 => __DIR__ . '/..' . '/cakephp/utility',
        ),
        'Cake\\Core\\' => 
        array (
            0 => __DIR__ . '/..' . '/cakephp/core',
        ),
        'Authentication\\' => 
        array (
            0 => __DIR__ . '/..' . '/cakephp/authentication/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit976b4bd07c8be7fcec6f1a13134a038c::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit976b4bd07c8be7fcec6f1a13134a038c::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit976b4bd07c8be7fcec6f1a13134a038c::$classMap;

        }, null, ClassLoader::class);
    }
}
