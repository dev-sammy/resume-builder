export const isEmailValid = (email: string) => {
    const pattern = /^(?!$)(?=\S+@\S+\.\S*$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email && !pattern.test(email)) return "Email format is invalid.";
    return true;
}

export const isValidPhone = (phoneNumber: string) => {
    const pattern = /^\+[1-9]\d{1,14}$/;
    if(phoneNumber && (phoneNumber.length < 12 || phoneNumber.length > 16)) return "Enter a valid phone number.";
    if(!pattern.test(phoneNumber)) return "Phone number should include country code and valid format.";
    return true;
}
