<?php

namespace Plouc\AdminBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class PloucAdminBundle extends Bundle
{
    /**
     * @return string
     */
    public function getParent()
    {
        return 'SonataAdminBundle';
    }
}
