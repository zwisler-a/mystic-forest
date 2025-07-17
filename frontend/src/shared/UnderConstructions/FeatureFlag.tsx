import { ReactNode } from "react";
import { previewFeatures, productionFeatures } from "../../features.ts";
import UnderPreview from "./UnderPreview.tsx";
import UnderConstruction from "./UnderConstruction.tsx";

const isProduction = window.location.hostname === 'mystic-forest.de';

function FeatureFlag({ children, feature }: { children: ReactNode, feature: string }) {
    if (!feature) return null;
    let featureEnabled = false;

    if (productionFeatures[feature]) {
        return children;
    }

    if (isProduction) {
        featureEnabled = productionFeatures[feature];
    } else {
        featureEnabled = previewFeatures[feature];
    }
    return (
        <>
            {(((featureEnabled && isProduction)) && (children))}
            {((featureEnabled && !isProduction) && (<>{children}<UnderPreview /></>))}
            {((!featureEnabled && !isProduction) && (<><UnderConstruction /></>))}
            {((!featureEnabled && isProduction) && (<><UnderConstruction /></>))}
        </>
    );
}

export default FeatureFlag;
