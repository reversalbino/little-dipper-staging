import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './FeedPage.css';

export default function FeedPage() {
    const posts = useSelector(state => state.images)
}
