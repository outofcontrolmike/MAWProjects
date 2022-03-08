<?php
declare(strict_types=1);

namespace App\Test\Fixture;

use Cake\TestSuite\Fixture\TestFixture;

/**
 * UsersFixture
 */
class UsersFixture extends TestFixture
{
    /**
     * Init method
     *
     * @return void
     */
    public function init(): void
    {
        $this->records = [
            [
                'id' => 1,
                'email' => 'Lorem ipsum dolor sit amet',
                'password' => 'Lorem ipsum dolor sit amet',
                'user_name' => 'Lorem ipsum dolor sit amet',
                'bio' => 'Lorem ipsum dolor sit amet',
                'instagram_link' => 'Lorem ipsum dolor sit amet',
                'created' => '2022-03-08 15:09:21',
                'modified' => '2022-03-08 15:09:21',
            ],
        ];
        parent::init();
    }
}
