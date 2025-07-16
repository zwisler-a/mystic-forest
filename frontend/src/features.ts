const LOCAL_STORAGE_KEY = "enabledFeatures";

const defaultFeatures: Record<string, boolean> = {
    DRINKS: false,
    PACKING: false,
    TIMETABLE: false,
};

function loadFeatures(): Record<string, boolean> {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!saved) return defaultFeatures;
    try {
        return {...defaultFeatures, ...JSON.parse(saved)};
    } catch {
        return defaultFeatures;
    }
}

export const ENABLED_FEATURES = loadFeatures();
