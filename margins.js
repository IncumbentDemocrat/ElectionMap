const margins = {
    "AK-At-Large": -0.01,
    "AL-1": 0.96,
    "AL-2": 0.33,
    "AL-3": 0.38,
    "AL-4": 0.62,
    "AL-5": 0.31,
    "AL-6": 0.96,
    "AL-7": -0.26,
    "AR-1": 0.42,
    "AR-2": 0.17,
    "AR-3": 0.28,
    "AR-4": 0.38,
    "AZ-1": 0.08,
    "AZ-2": 0.04,
    "AZ-3": -0.47,
    "AZ-4": -0.04,
    "AZ-5": 0.26,
    "AZ-6": 0.1,
    "AZ-7": -0.27,
    "AZ-8": 1,
    "AZ-9": 1,
    "CA-1": 0.26,
    "CA-10": -0.74,
    "CA-11": -0.66,
    "CA-12": -0.75,
    "CA-13": -0.03,
    "CA-14": -0.39,
    "CA-15": -1,
    "CA-16": -1,
    "CA-17": -0.44,
    "CA-18": -0.38,
    "CA-19": -0.34,
    "CA-2": -0.43,
    "CA-20": 0.33,
    "CA-21": -0.14,
    "CA-22": -0.05,
    "CA-23": 0.17,
    "CA-24": -0.24,
    "CA-25": -0.11,
    "CA-26": -0.1,
    "CA-27": -0.03,
    "CA-28": -0.3,
    "CA-29": -0.99,
    "CA-3": 0.1,
    "CA-30": -1,
    "CA-31": -0.26,
    "CA-32": -0.37,
    "CA-33": -0.2,
    "CA-34": -1,
    "CA-35": -0.21,
    "CA-36": -0.38,
    "CA-37": -1,
    "CA-38": -0.23,
    "CA-39": -0.19,
    "CA-4": -0.32,
    "CA-40": 0.12,
    "CA-41": 0.06,
    "CA-42": -0.4,
    "CA-43": -0.59,
    "CA-44": -0.45,
    "CA-45": 0.01,
    "CA-46": -0.25,
    "CA-47": -0.04,
    "CA-48": 0.21,
    "CA-49": -0.03,
    "CA-5": 0.18,
    "CA-50": -0.25,
    "CA-51": -0.2,
    "CA-52": -0.34,
    "CA-6": -0.13,
    "CA-7": -0.34,
    "CA-8": -0.49,
    "CA-9": -0.04,
    "CO-1": -0.5,
    "CO-2": -0.31,
    "CO-3": 0.12,
    "CO-4": 0.26,
    "CO-5": 0.23,
    "CO-6": -0.13,
    "CO-7": -0.03,
    "CO-8": 0.05,
    "CT-1": -0.18,
    "CT-2": -0.024,
    "CT-3": -0.1,
    "CT-4": -0.2,
    "CT-5": -0.04,
    "DE-At-Large": -0.12,
    "FL-1": 0.27,
    "FL-10": -0.28,
    "FL-11": 0.19,
    "FL-12": 0.37,
    "FL-13": 0.09,
    "FL-14": -0.12,
    "FL-15": 0.07,
    "FL-16": 0.13,
    "FL-17": 0.22,
    "FL-18": 0.96,
    "FL-19": 0.26,
    "FL-2": 0.11,
    "FL-20": -0.44,
    "FL-21": 0.14,
    "FL-22": -0.12,
    "FL-23": -0.13,
    "FL-24": -0.53,
    "FL-25": -0.23,
    "FL-26": 0.14,
    "FL-27": 0.02,
    "FL-28": 0.1,
    "FL-3": 0.16,
    "FL-4": 0.13,
    "FL-5": 1,
    "FL-6": 0.96,
    "FL-7": 0.15,
    "FL-8": 0.23,
    "FL-9": -0.14,
    "GA-1": 0.2,
    "GA-10": 0.35,
    "GA-11": 0.3,
    "GA-12": 0.2,
    "GA-13": -0.51,
    "GA-14": 0.44,
    "GA-2": -0.02,
    "GA-3": 0.42,
    "GA-4": -0.47,
    "GA-5": -0.56,
    "GA-6": 0.32,
    "GA-7": -0.11,
    "GA-8": 0.38,
    "GA-9": 0.44,
    "HI-1": -0.29,
    "HI-2": -0.29,
    "IA-1": 0.04,
    "IA-2": 0.03,
    "IA-3": 0.02,
    "IA-4": 0.31,
    "ID-1": 0.53,
    "ID-2": 0.26,
    "IL-1": -0.37,
    "IL-10": -0.19,
    "IL-11": -0.08,
    "IL-12": 0.44,
    "IL-13": -0.05,
    "IL-14": -0.05,
    "IL-15": 0.15,
    "IL-16": 0.26,
    "IL-17": -0.06,
    "IL-2": -0.33,
    "IL-3": -0.35,
    "IL-4": -0.43,
    "IL-5": -0.32,
    "IL-6": -0.04,
    "IL-7": -1,
    "IL-8": -0.09,
    "IL-9": -0.39,
    "IN-1": -0.06,
    "IN-2": 0.34,
    "IN-3": 0.35,
    "IN-4": 0.32,
    "IN-5": 0.22,
    "IN-6": 0.44,
    "IN-7": -0.33,
    "IN-8": 0.35,
    "IN-9": 0.34,
    "KS-1": 0.33,
    "KS-2": 0.21,
    "KS-3": -0.004,
    "KS-4": 0.26,
    "KY-1": 0.41,
    "KY-2": 0.37,
    "KY-3": -0.17,
    "KY-4": 0.33,
    "KY-5": 0.57,
    "KY-6": 0.13,
    "LA-1": 0.39,
    "LA-2": -0.51,
    "LA-3": 0.41,
    "LA-4": 1,
    "LA-5": 0.33,
    "LA-6": 0.96,
    "MA-1": -0.27,
    "MA-2": -0.31,
    "MA-3": -0.27,
    "MA-4": -0.25,
    "MA-5": -0.45,
    "MA-6": -0.23,
    "MA-7": -0.71,
    "MA-8": -0.3,
    "MA-9": -0.15,
    "MD-1": 0.25,
    "MD-2": -0.09,
    "MD-3": -0.12,
    "MD-4": -0.74,
    "MD-5": -0.3,
    "MD-6": 0.01,
    "MD-7": -0.5,
    "MD-8": -0.56,
    "ME-1": -0.2,
    "ME-2": 0.02,
    "MI-1": 0.24,
    "MI-10": 0.05,
    "MI-11": -0.18,
    "MI-12": -0.44,
    "MI-13": -0.42,
    "MI-2": 0.3,
    "MI-3": -0.05,
    "MI-4": 0.1,
    "MI-5": 0.27,
    "MI-6": -0.18,
    "MI-7": -0.04,
    "MI-8": -0.002,
    "MI-9": 0.33,
    "MN-1": 0.1,
    "MN-2": -0.012,
    "MN-3": -0.16,
    "MN-4": -0.29,
    "MN-5": -0.6,
    "MN-6": 0.23,
    "MN-7": 0.36,
    "MN-8": 0.14,
    "MO-1": -0.54,
    "MO-2": 0.16,
    "MO-3": 0.35,
    "MO-4": 0.44,
    "MO-5": -0.18,
    "MO-6": 0.41,
    "MO-7": 0.46,
    "MO-8": 0.59,
    "MS-1": 0.38,
    "MS-2": -0.2,
    "MS-3": 0.27,
    "MS-4": 0.4,
    "MT-1": 0.09,
    "MT-2": 0.33,
    "NC-1": -0.07,
    "NC-10": 0.47,
    "NC-11": 0.13,
    "NC-12": -0.22,
    "NC-13": 0.04,
    "NC-14": -0.09,
    "NC-2": -0.21,
    "NC-3": 0.31,
    "NC-4": -0.31,
    "NC-5": 0.24,
    "NC-6": -0.08,
    "NC-7": 0.16,
    "NC-8": 0.37,
    "NC-9": 0.12,
    "ND-At-Large": 0.23,
    "NE-1": 0.17,
    "NE-2": 0.06,
    "NE-3": 0.55,
    "NH-1": -0.02,
    "NH-2": -0.05,
    "NJ-1": -0.19,
    "NJ-10": -0.63,
    "NJ-11": -0.1,
    "NJ-12": -0.35,
    "NJ-2": 0.1,
    "NJ-3": -0.07,
    "NJ-4": 0.28,
    "NJ-5": -0.05,
    "NJ-6": -0.09,
    "NJ-7": 0.04,
    "NJ-8": -0.46,
    "NJ-9": -0.18,
    "NM-1": -0.09,
    "NM-2": -0.02,
    "NM-3": -0.09,
    "NV-1": -0.03,
    "NV-2": 0.12,
    "NV-3": -0.01,
    "NV-4": -0.03,
    "NY-1": 0.06,
    "NY-10": -0.63,
    "NY-11": 0.09,
    "NY-12": -0.62,
    "NY-13": -1,
    "NY-14": -0.52,
    "NY-15": -0.65,
    "NY-16": -0.36,
    "NY-17": -0.07,
    "NY-18": -0.02,
    "NY-19": 0.02,
    "NY-2": 0.04,
    "NY-20": -0.12,
    "NY-21": 0.17,
    "NY-22": 0.002,
    "NY-23": 0.23,
    "NY-24": 0.22,
    "NY-25": -0.11,
    "NY-26": -0.15,
    "NY-3": -0.02,
    "NY-4": -0.08,
    "NY-5": -0.56,
    "NY-6": -0.28,
    "NY-7": -0.57,
    "NY-8": -0.47,
    "NY-9": -0.46,
    "OH-1": 0.03,
    "OH-10": 0.09,
    "OH-11": -0.43,
    "OH-12": 0.33,
    "OH-13": 0.04,
    "OH-14": 0.19,
    "OH-15": 0.27,
    "OH-2": 0.51,
    "OH-3": -0.31,
    "OH-4": 0.39,
    "OH-5": 0.29,
    "OH-6": 0.29,
    "OH-7": 0.24,
    "OH-8": 0.26,
    "OH-9": -0.05,
    "OK-1": 0.29,
    "OK-2": 0.53,
    "OK-3": 0.45,
    "OK-4": 0.34,
    "OK-5": 0.24,
    "OR-1": -0.3,
    "OR-2": 0.15,
    "OR-3": -0.48,
    "OR-4": -0.06,
    "OR-5": -0.014,
    "OR-6": -0.03,
    "PA-1": 0.04,
    "PA-10": 0.04,
    "PA-11": 0.28,
    "PA-12": -0.13,
    "PA-13": 1,
    "PA-14": 1,
    "PA-15": 1,
    "PA-16": 0.25,
    "PA-17": -0.03,
    "PA-2": -0.44,
    "PA-3": -1,
    "PA-4": -0.11,
    "PA-5": -0.23,
    "PA-6": -0.04,
    "PA-7": 0.05,
    "PA-8": 0.03,
    "PA-9": 0.4,
    "RI-1": -0.41,
    "RI-2": -0.05,
    "SC-1": 0.17,
    "SC-2": 0.2,
    "SC-3": 1,
    "SC-4": 0.26,
    "SC-5": 0.26,
    "SC-6": -0.23,
    "SC-7": 0.26,
    "SD-At-Large": 0.67,
    "TN-1": 0.62,
    "TN-2": 0.36,
    "TN-3": 0.35,
    "TN-4": 0.45,
    "TN-5": 0.07,
    "TN-6": 0.35,
    "TN-7": 0.24,
    "TN-8": 0.45,
    "TN-9": -0.38,
    "TX-1": 0.55,
    "TX-10": 0.31,
    "TX-11": 1,
    "TX-12": 0.32,
    "TX-13": 0.56,
    "TX-14": 0.34,
    "TX-15": 0.04,
    "TX-16": -0.37,
    "TX-17": 0.26,
    "TX-18": -0.36,
    "TX-19": 0.97,
    "TX-2": 0.39,
    "TX-21": -0.28,
    "TX-21__1": 0.33,
    "TX-22": 0.24,
    "TX-23": 0.2,
    "TX-24": 0.33,
    "TX-25": 0.96,
    "TX-26": 0.94,
    "TX-27": 0.4,
    "TX-28": -0.15,
    "TX-29": -0.31,
    "TX-3": 0.24,
    "TX-30": -0.57,
    "TX-31": 1,
    "TX-32": -0.24,
    "TX-33": -0.5,
    "TX-34": -0.09,
    "TX-35": -0.43,
    "TX-36": 0.45,
    "TX-37": -0.45,
    "TX-38": 0.36,
    "TX-4": 0.22,
    "TX-5": 0.32,
    "TX-6": 1,
    "TX-7": -0.31,
    "TX-8": 0.37,
    "TX-9": -0.49,
    "UT-1": 0.28,
    "UT-2": 0.22,
    "UT-3": 0.26,
    "UT-4": 0.3,
    "VA-1": 0.14,
    "VA-10": -0.06,
    "VA-11": -0.29,
    "VA-2": 0.02,
    "VA-3": -0.29,
    "VA-4": -0.27,
    "VA-5": 0.14,
    "VA-6": 0.27,
    "VA-7": -0.03,
    "VA-8": -0.42,
    "VA-9": 0.44,
    "VT-At-Large": -0.25,
    "WA-1": -0.22,
    "WA-10": -0.11,
    "WA-2": -0.16,
    "WA-3": 0.11,
    "WA-4": 0.31,
    "WA-5": 0.18,
    "WA-6": -0.11,
    "WA-7": -0.64,
    "WA-8": -0.01,
    "WA-9": -0.37,
    "WI-1": 0.11,
    "WI-2": -0.32,
    "WI-3": 0.1,
    "WI-4": -0.44,
    "WI-5": 0.32,
    "WI-6": 1,
    "WI-7": 0.27,
    "WI-8": 0.92,
    "WV-1": 0.34,
    "WV-2": 0.33,
    "WY-At-Large": 0.49
}
