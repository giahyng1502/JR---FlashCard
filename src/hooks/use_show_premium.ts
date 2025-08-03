import {useContext, useEffect, useState} from 'react';
import {PremiumContext} from "../context/premium_context.tsx";

export const usePremium = () => useContext(PremiumContext);
