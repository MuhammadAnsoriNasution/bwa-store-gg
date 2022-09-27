import Image from 'next/image';
import React from 'react';
import { UserTypes } from '../../../services/data-types';
import { API_IMG } from '../../../utils/api';

interface ToogleMenuProps {
    user: UserTypes
}
export default function ToogleMenu({ user }: ToogleMenuProps) {
    return (
        <a className="dropdown-toggle ms-lg-40" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <Image src={user.avatar} className="rounded-circle" width={40} height={40} alt="avaar" />
        </a>
    );
}
