<?php
declare(strict_types=1);

namespace App\Policy;

use App\Model\Entity\Recipe;
use Authorization\IdentityInterface;

/**
 * Recipe policy
 */
class RecipePolicy
{
    public function canAdd(IdentityInterface $user, Recipe $recipe)
    {
        // All logged in users can create recipes.
        return true;
    }

    public function canEdit(IdentityInterface $user, Recipe $recipe)
    {
        // logged in users can edit their own recipes.
        return $this->isAuthor($user, $recipe);
    }

    public function canDelete(IdentityInterface $user, Recipe $recipe)
    {
        // logged in users can delete their own recipes.
        return $this->isAuthor($user, $recipe);
    }

    protected function isAuthor(IdentityInterface $user, Recipe $recipe)
    {
        return $recipe->user_id === $user->getIdentifier();
    }
}
