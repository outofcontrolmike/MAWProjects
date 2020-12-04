<?php
declare(strict_types=1);

namespace App\Policy;

use App\Model\Entity\Game;
use Authorization\IdentityInterface;

/**
 * Game policy
 */
class GamePolicy
{
    /**
     * Check if $user can create Game
     *
     * @param Authorization\IdentityInterface $user The user.
     * @param App\Model\Entity\Game $game
     * @return bool
     */
    public function canCreate(IdentityInterface $user, Game $game)
    {
        //all logged in users can create Games
        return true;
    }

    /**
     * Check if $user can update Game
     *
     * @param Authorization\IdentityInterface $user The user.
     * @param App\Model\Entity\Game $game
     * @return bool
     */
    public function canUpdate(IdentityInterface $user, Game $game)
    {
        return $this->isAuthor($user, $game);
    }

    /**
     * Check if $user can delete Game
     *
     * @param Authorization\IdentityInterface $user The user.
     * @param App\Model\Entity\Game $game
     * @return bool
     */
    public function canDelete(IdentityInterface $user, Game $game)
    {
        return $this->isAuthor($user, $game);

    }

    /**
     * Check if $user can view Game
     *
     * @param Authorization\IdentityInterface $user The user.
     * @param App\Model\Entity\Game $game
     * @return bool
     */
    public function canView(IdentityInterface $user, Game $game)
    {
        return $game->user_id === $user->getIdentifier();

    }
}
