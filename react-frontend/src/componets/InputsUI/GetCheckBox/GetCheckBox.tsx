import React from "react";
import styles from "./GetCheckBox.module.scss";

const GetCheckBox = ({ register }: any) => {
	return (
		<div>
			<input
				role="checkOnGoing"
				className={styles.container__checkBox}
				type="checkbox"
				{...register("onGoing", {})}
			/>
			<label className={styles.container__fieldName}>On Going</label>
		</div>
	);
};

export default GetCheckBox;
