"use client"

import {
    gsap,
    Draggable,
    DrawSVGPlugin,
    EaselPlugin,
    Flip,
    GSDevTools,
    InertiaPlugin,
    MotionPathHelper,
    MotionPathPlugin,
    MorphSVGPlugin,
    Observer,
    Physics2DPlugin,
    PhysicsPropsPlugin,
    PixiPlugin,
    ScrambleTextPlugin,
    ScrollTrigger,
    ScrollSmoother,
    ScrollToPlugin,
    SplitText,
    TextPlugin,
    RoughEase,
    ExpoScaleEase,
    SlowMo,
    CustomEase,
    CustomBounce,
    CustomWiggle
} from "gsap/all";
import { useGSAP } from "@gsap/react";

// Register all plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(
        useGSAP,
        Draggable,
        DrawSVGPlugin,
        EaselPlugin,
        Flip,
        GSDevTools,
        InertiaPlugin,
        MotionPathHelper,
        MotionPathPlugin,
        MorphSVGPlugin,
        Observer,
        Physics2DPlugin,
        PhysicsPropsPlugin,
        PixiPlugin,
        ScrambleTextPlugin,
        ScrollTrigger,
        ScrollSmoother,
        ScrollToPlugin,
        SplitText,
        TextPlugin,
        RoughEase,
        ExpoScaleEase,
        SlowMo,
        CustomEase,
        CustomBounce,
        CustomWiggle
    );
}

export {
    gsap,
    useGSAP,
    ScrollTrigger,
    ScrollToPlugin,
    SplitText,
    MorphSVGPlugin,
    DrawSVGPlugin,
    InertiaPlugin,
    ScrollSmoother,
    CustomEase,
    Flip,
    ScrambleTextPlugin,
    Draggable,
    Observer
};
