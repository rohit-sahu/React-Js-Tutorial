export const getAllEmployee = employees => {
    return {
        type: "GET_EMPLOYEES",
        payload: employees,
    }
};