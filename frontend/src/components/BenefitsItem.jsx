import React from "react";
import styles from './BenefitsItem.module.css';
import Text from "./base/Text/Text";
import { COLORS } from "../utils/globalVariables";
import Icon from "./base/Icons/Icons";

const BenefitsItem = ({ iconSrc, iconAlt, title, description }) => {
    return (
        <div className={styles.benefitsCard}>
            <div className={styles.iconWrapper}>
                <img src={iconSrc} alt={iconAlt} size={60} />
            </div>
            <Text as='h3' color={COLORS.BLACK_COLOR}>{title}</Text>
            <Text as='p' color={COLORS.BLACK_COLOR}>{description}</Text>
        </div>
    );
};

export default BenefitsItem;