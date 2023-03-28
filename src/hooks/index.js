import { useState } from "react"

export const usePersistedState = (key, defaultValue = null) => {
    // imediatly fetch the key
    const [value, setValue] = useState(() => {
        // get items key from local storage
        const storedValue = localStorage.getItem(key)

        if (storedValue) {
            // if there is a stored item then return it as an object
            return JSON.parse(storedValue)
        } else {
            //if not return null
            return defaultValue
        }
    })
    // takes in the new value's key and saves it as a string to local storage
    const setAndPersistValue = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue)
    }

    return [value, setAndPersistValue]
}