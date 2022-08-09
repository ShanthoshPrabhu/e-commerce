import axios from "axios";

export const instance =axios.create({
    baseURL:`http://localhost:5001/e-commerce-13170/us-central1/api`
});

