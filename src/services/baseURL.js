import axios from "axios";
import { projectConfig } from '../config'

let localBackendURL = projectConfig.apiUrl;

export default axios.create({
  baseURL: localBackendURL
});
