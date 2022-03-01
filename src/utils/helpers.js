export const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,9}$/;
export const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const getTomorrow = () => {
    let today = new Date();
    let tomorrow = new Date(today);
    // get the next day "tomorrow"
    tomorrow.setDate(tomorrow.getDate()+1);
    return tomorrow.toISOString().split("T")[0];
}
export const defaultValues = {
    username: "Van Ty",
    age: 24,
    phone: "0384943497",
    email: "test@gmail.com",
    password: "123456",
    confirmPassword: "123456",
    date: getTomorrow(),
    status: "active",
    sex:"male",
    subcribe: true,
}