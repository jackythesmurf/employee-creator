import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import CreateEmployee from "../types/CreateEmployee";

type handleDatesUponSubmitProp = {
    watch: UseFormWatch<CreateEmployee>,
    setValue: UseFormSetValue<CreateEmployee>
}
const handleDatesUponSubmit = ({watch, setValue}: handleDatesUponSubmitProp) => {
    const formateStartDate = () => {
        const date = watch("startDay");
        const month = watch("startMonth");
        const year = watch("startYear");
        const formattedDate = new Date(`${year}-${month}-${date}`)
            .toISOString()
            .slice(0, 10);
        return formattedDate;
    };
    const formateFinishDate = () => {
        const date = watch("finishDay");
        const month = watch("finishMonth");
        const year = watch("finishYear");
        return watch("onGoing")
            ? null
            : `${year}-${month.padStart(2, "0")}-${date.padStart(2, "0")}`;
    };
    setValue("startDate", formateStartDate(), {
        shouldDirty: true,
        shouldTouch: true,
    });
    setValue("finishDate", formateFinishDate(), {
        shouldDirty: true,
        shouldTouch: true,
    });
};

export default handleDatesUponSubmit;