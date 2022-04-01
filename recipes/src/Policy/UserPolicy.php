<?php
declare(strict_types=1);

namespace App\Policy;

use App\Model\Entity\User;
use Authorization\IdentityInterface;

/**
 * User policy
 */
class UserPolicy
{
    /**
     * Check if $user can create User
     *
     * @param Authorization\IdentityInterface $user The user.
     * @param App\Model\Entity\User $resource
     * @return bool
     */
    public function canAdd (IdentityInterface $user, User $resource)
    {
        return true;
    }

    public function canEdit(IdentityInterface $user, User $resource)
    {
        // logged in users can edit their own info
        return $this->isAuthor($user, $resource);
    }

    /**
     * Check if $user can delete User
     *
     * @param Authorization\IdentityInterface $user The user.
     * @param App\Model\Entity\User $resource
     * @return bool
     */
    public function canDelete(IdentityInterface $user, User $resource)
    {
          // logged in users can delete their own recipes.
          return $this->isAuthor($user, $resource);
    }

    protected function isAuthor(IdentityInterface $user, User $resource)
    {
        return $resource->id === $user->getIdentifier();
    }
}
