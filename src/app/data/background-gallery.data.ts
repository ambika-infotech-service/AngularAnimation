import { Type } from '@angular/core';
import { FloatingShapes } from '../components/background-layers/floating-shapes/floating-shapes';
import { HeroParticles } from '../components/background-layers/hero-particles/hero-particles';
import { HeroShimmer } from '../components/background-layers/hero-shimmer/hero-shimmer';
import { GeometricShapes } from '../components/background-layers/geometric-shapes/geometric-shapes';
import { GlowNodes } from '../components/background-layers/glow-nodes/glow-nodes';
import { LightRays } from '../components/background-layers/light-rays/light-rays';
import { DepthLayers } from '../components/background-layers/depth-layers/depth-layers';
import { StarfieldBg } from '../components/background-layers/starfield-bg/starfield-bg';
import { AuroraBg } from '../components/background-layers/aurora-bg/aurora-bg';
import { NeonGridBg } from '../components/background-layers/neon-grid-bg/neon-grid-bg';
import { BubblesBg } from '../components/background-layers/bubbles-bg/bubbles-bg';
import { MeshGradientBg } from '../components/background-layers/mesh-gradient-bg/mesh-gradient-bg';
import { ConstellationBg } from '../components/background-layers/constellation-bg/constellation-bg';
import { RadarRingsBg } from '../components/background-layers/radar-rings-bg/radar-rings-bg';
import { GlitchStripesBg } from '../components/background-layers/glitch-stripes-bg/glitch-stripes-bg';
import { PrismCausticsBg } from '../components/background-layers/prism-caustics-bg/prism-caustics-bg';
import { TopographicFlowBg } from '../components/background-layers/topographic-flow-bg/topographic-flow-bg';
import { VortexTunnelBg } from '../components/background-layers/vortex-tunnel-bg/vortex-tunnel-bg';
import { PaperCutStrataBg } from '../components/background-layers/paper-cut-strata-bg/paper-cut-strata-bg';
import { HalftonePopBg } from '../components/background-layers/halftone-pop-bg/halftone-pop-bg';
import { LiquidChromeBg } from '../components/background-layers/liquid-chrome-bg/liquid-chrome-bg';
import { SolarPosterBg } from '../components/background-layers/solar-poster-bg/solar-poster-bg';
import { SpotlightStageBg } from '../components/background-layers/spotlight-stage-bg/spotlight-stage-bg';
import { EditorialFrameBg } from '../components/background-layers/editorial-frame-bg/editorial-frame-bg';
import { SoftVignetteBg } from '../components/background-layers/soft-vignette-bg/soft-vignette-bg';
import { SunwashMeshBg } from '../components/background-layers/sunwash-mesh-bg/sunwash-mesh-bg';
import { BlueprintPaperBg } from '../components/background-layers/blueprint-paper-bg/blueprint-paper-bg';
import { PricingAuraBg } from '../components/background-layers/pricing-aura-bg/pricing-aura-bg';
import { TestimonialSpotlightBg } from '../components/background-layers/testimonial-spotlight-bg/testimonial-spotlight-bg';
import { TeamMosaicBg } from '../components/background-layers/team-mosaic-bg/team-mosaic-bg';
import { FeatureFocusBg } from '../components/background-layers/feature-focus-bg/feature-focus-bg';
import { SilkRibbonBg } from '../components/background-layers/silk-ribbon-bg/silk-ribbon-bg';
import { AtelierPaperBg } from '../components/background-layers/atelier-paper-bg/atelier-paper-bg';
import { PearlRadialBg } from '../components/background-layers/pearl-radial-bg/pearl-radial-bg';

export type BackgroundFilter =
  | 'all'
  | 'ambient'
  | 'sci-fi'
  | 'abstract'
  | 'kinetic'
  | 'geometric'
  | 'editorial'
  | 'content'
  | 'light'
  | 'luxury'
  | 'image'
  | 'mixed';

export type BackgroundCategory = Exclude<BackgroundFilter, 'all' | 'mixed'>;
export type BackgroundPreviewTone = 'dark' | 'light';

export interface BackgroundKnob {
  readonly label: string;
  readonly description: string;
}

export interface BackgroundGalleryItem {
  readonly slug: string;
  readonly name: string;
  readonly selector: string;
  readonly component: Type<unknown>;
  readonly category: BackgroundCategory;
  readonly previewTone: BackgroundPreviewTone;
  readonly summary: string;
  readonly detail: string;
  readonly tags: ReadonlyArray<string>;
  readonly useCases: ReadonlyArray<string>;
  readonly knobs: ReadonlyArray<BackgroundKnob>;
}

export const BACKGROUND_FILTERS: ReadonlyArray<{ value: BackgroundFilter; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'ambient', label: 'Ambient' },
  { value: 'sci-fi', label: 'Sci-Fi' },
  { value: 'abstract', label: 'Abstract' },
  { value: 'kinetic', label: 'Kinetic' },
  { value: 'geometric', label: 'Geometric' },
  { value: 'editorial', label: 'Editorial' },
  { value: 'content', label: 'Content-Safe' },
  { value: 'light', label: 'Light Content' },
  { value: 'luxury', label: 'Luxury Light' },
  { value: 'image', label: 'Image Focused' },
  { value: 'mixed', label: 'Mixed' },
];

function defineBackground(item: BackgroundGalleryItem): BackgroundGalleryItem {
  return item;
}

export const BACKGROUND_GALLERY_ITEMS: ReadonlyArray<BackgroundGalleryItem> = [
  defineBackground({
    slug: 'floating-shapes',
    name: 'Floating Shapes',
    selector: 'app-floating-shapes',
    component: FloatingShapes,
    category: 'ambient',
    previewTone: 'dark',
    summary: 'Two blurred orbs drift on a soft looping path for calm ambient motion.',
    detail: 'A minimal ambient layer that adds motion without taking visual ownership, making it useful for subtle hero sections and product pages.',
    tags: ['ambient', 'orbs', 'blur', 'hero'],
    useCases: ['Hero backdrops', 'SaaS landing pages', 'Quiet loading states'],
    knobs: [
      { label: 'Orb size', description: 'Scale each blurred shape up or down to make the layer feel softer or more immersive.' },
      { label: 'Path duration', description: 'Adjust the animation timing to move from barely noticeable drift to more visible motion.' },
      { label: 'Opacity', description: 'Lower alpha when the foreground needs maximum contrast or raise it for a more atmospheric hero.' },
    ],
  }),
  defineBackground({
    slug: 'hero-particles',
    name: 'Hero Particles',
    selector: 'app-hero-particles',
    component: HeroParticles,
    category: 'kinetic',
    previewTone: 'dark',
    summary: 'Micro-particles rise from the base with a light waveform, creating active motion.',
    detail: 'This layer reads as energetic and tech-forward, ideal when a hero needs visible momentum instead of ambient drift.',
    tags: ['kinetic', 'particles', 'tech', 'launch'],
    useCases: ['Product launches', 'AI dashboards', 'Performance sections'],
    knobs: [
      { label: 'Particle count', description: 'Increase or reduce the number of floating dots to control scene density.' },
      { label: 'Rise speed', description: 'Tune the travel duration for a calmer or more event-driven surface.' },
      { label: 'Wave intensity', description: 'Dial the base waveform up for a stronger signal feel or down for cleaner minimalism.' },
    ],
  }),
  defineBackground({
    slug: 'hero-shimmer',
    name: 'Hero Shimmer',
    selector: 'app-hero-shimmer',
    component: HeroShimmer,
    category: 'ambient',
    previewTone: 'dark',
    summary: 'A diagonal shimmer sweeps slowly across the surface like a passing studio light.',
    detail: 'Use it to make static layouts feel polished without introducing separate shapes, particles, or complex structures.',
    tags: ['ambient', 'sheen', 'premium', 'surface'],
    useCases: ['Premium cards', 'Hero overlays', 'Subtle section dividers'],
    knobs: [
      { label: 'Sweep width', description: 'Change the highlight band thickness to make the effect broader or more precise.' },
      { label: 'Speed', description: 'Lengthen the loop for understated sheen or shorten it for a more promotional feel.' },
      { label: 'Contrast', description: 'Control how bright the shimmer becomes against the underlying surface.' },
    ],
  }),
  defineBackground({
    slug: 'geometric-shapes',
    name: 'Geometric Shapes',
    selector: 'app-geometric-shapes',
    component: GeometricShapes,
    category: 'geometric',
    previewTone: 'dark',
    summary: 'Rotating and pulsing geometric forms give the background a graphic, structured rhythm.',
    detail: 'This layer is more illustrative than atmospheric, so it works best when the visual system can support visible shapes.',
    tags: ['geometric', 'shapes', 'graphic', 'cyan'],
    useCases: ['Design systems', 'Developer tools', 'Motion showcases'],
    knobs: [
      { label: 'Shape scale', description: 'Increase the form size for a poster feel or shrink it for lighter decorative motion.' },
      { label: 'Rotation timing', description: 'Tune each transform speed to move from playful to disciplined motion.' },
      { label: 'Color accents', description: 'Swap the current accent hues to align with a product or brand palette.' },
    ],
  }),
  defineBackground({
    slug: 'glow-nodes',
    name: 'Glow Nodes',
    selector: 'app-glow-nodes',
    component: GlowNodes,
    category: 'sci-fi',
    previewTone: 'dark',
    summary: 'Scattered glowing points pulse independently for a connected-node feel.',
    detail: 'Glow Nodes adds light, depth, and a data-network mood without committing to full grid or radar visuals.',
    tags: ['sci-fi', 'nodes', 'network', 'pulse'],
    useCases: ['Data products', 'Cyber interfaces', 'Tech brand sections'],
    knobs: [
      { label: 'Node spread', description: 'Reposition the points to feel more clustered, balanced, or asymmetric.' },
      { label: 'Pulse amplitude', description: 'Increase glow intensity for a stronger sci-fi read or soften it for utility UI.' },
      { label: 'Blur radius', description: 'Tune the bloom around each node to make the surface feel crisper or more cinematic.' },
    ],
  }),
  defineBackground({
    slug: 'light-rays',
    name: 'Light Rays',
    selector: 'app-light-rays',
    component: LightRays,
    category: 'sci-fi',
    previewTone: 'dark',
    summary: 'Rotating linear rays radiate from the center like a scanning beacon or spotlight array.',
    detail: 'This is a directional layer, so it works best where a center focal point helps anchor the rest of the layout.',
    tags: ['sci-fi', 'rays', 'beacon', 'centered'],
    useCases: ['Hero focal points', 'Stage reveals', 'Futuristic callouts'],
    knobs: [
      { label: 'Ray count', description: 'Change the number of beams to move between sparse elegance and denser signal patterns.' },
      { label: 'Rotation speed', description: 'Slow the sweep for calm stage-light motion or quicken it for more urgency.' },
      { label: 'Beam opacity', description: 'Balance the visual presence of the rays against headlines and UI chrome.' },
    ],
  }),
  defineBackground({
    slug: 'depth-layers',
    name: 'Depth Layers',
    selector: 'app-depth-layers',
    component: DepthLayers,
    category: 'ambient',
    previewTone: 'dark',
    summary: 'Parallax dot fields drift at different speeds to simulate depth.',
    detail: 'Depth Layers is useful when you want movement that feels spatial instead of graphic, especially behind hero content.',
    tags: ['ambient', 'parallax', 'depth', 'dots'],
    useCases: ['Hero sections', 'Portfolio headers', 'Atmospheric banners'],
    knobs: [
      { label: 'Layer speed', description: 'Adjust each plane independently to exaggerate or flatten the parallax effect.' },
      { label: 'Dot density', description: 'Tune the field density to keep the scene airy or make it richer and more dimensional.' },
      { label: 'Foreground contrast', description: 'Lower brightness when the text layer needs quieter support.' },
    ],
  }),
  defineBackground({
    slug: 'starfield-bg',
    name: 'Starfield',
    selector: 'app-starfield-bg',
    component: StarfieldBg,
    category: 'sci-fi',
    previewTone: 'dark',
    summary: 'Twinkling stars and shooting streaks create a deep space scene.',
    detail: 'A direct space-themed layer for interfaces, launches, or storytelling that wants cosmic scale instead of abstract motion.',
    tags: ['sci-fi', 'space', 'stars', 'twinkle'],
    useCases: ['Space brands', 'Launch key visuals', 'Immersive splash screens'],
    knobs: [
      { label: 'Star density', description: 'Increase the number of stars for a richer sky or reduce them for cleaner hero layouts.' },
      { label: 'Twinkle cadence', description: 'Change timing randomness to make the sky feel calmer or more active.' },
      { label: 'Shooting stars', description: 'Raise or lower streak frequency depending on how dramatic the scene should feel.' },
    ],
  }),
  defineBackground({
    slug: 'aurora-bg',
    name: 'Aurora',
    selector: 'app-aurora-bg',
    component: AuroraBg,
    category: 'ambient',
    previewTone: 'dark',
    summary: 'Translucent color bands drift like northern lights across a dark surface.',
    detail: 'Aurora works well when the background should feel rich and luminous without looking strictly technological.',
    tags: ['ambient', 'aurora', 'bands', 'color'],
    useCases: ['Creative brands', 'Event pages', 'Atmospheric hero blocks'],
    knobs: [
      { label: 'Palette mix', description: 'Swap or rebalance the color bands to shift from cool, dreamy, or more brand-led moods.' },
      { label: 'Band blur', description: 'Soften edges for cloudier light or sharpen slightly for more visible structure.' },
      { label: 'Drift speed', description: 'Tune the glide speed to keep the scene meditative or more visually alive.' },
    ],
  }),
  defineBackground({
    slug: 'neon-grid-bg',
    name: 'Neon Grid',
    selector: 'app-neon-grid-bg',
    component: NeonGridBg,
    category: 'sci-fi',
    previewTone: 'dark',
    summary: 'A cyberpunk grid with scanlines and flicker elements for a classic futuristic backdrop.',
    detail: 'This layer is intentionally loud and directional, so it works best for demos, showcases, and retro-futurist hero scenes.',
    tags: ['sci-fi', 'grid', 'cyberpunk', 'scanlines'],
    useCases: ['Developer demos', 'Gaming pages', 'Retro-tech landings'],
    knobs: [
      { label: 'Grid perspective', description: 'Change the line spacing and horizon treatment to exaggerate depth.' },
      { label: 'Scanline intensity', description: 'Dial the interference effect up or down to match the overall motion budget.' },
      { label: 'Accent hue', description: 'Shift from cyan to magenta, lime, or brand colors without changing the structure.' },
    ],
  }),
  defineBackground({
    slug: 'bubbles-bg',
    name: 'Bubbles',
    selector: 'app-bubbles-bg',
    component: BubblesBg,
    category: 'ambient',
    previewTone: 'dark',
    summary: 'Translucent bubbles rise upward with a gentle wobble for playful ambient motion.',
    detail: 'The effect is soft and buoyant, so it suits friendly brands or sections that want movement without technical framing.',
    tags: ['ambient', 'bubbles', 'playful', 'float'],
    useCases: ['Consumer apps', 'Lifestyle sections', 'Soft hero backdrops'],
    knobs: [
      { label: 'Bubble count', description: 'Adjust the number of floating circles to control scene activity.' },
      { label: 'Size range', description: 'Use larger bubbles for whimsy or smaller ones for subtle texture.' },
      { label: 'Rise offset', description: 'Change stagger and travel timing to make the motion more organic or more rhythmic.' },
    ],
  }),
  defineBackground({
    slug: 'mesh-gradient-bg',
    name: 'Mesh Gradient',
    selector: 'app-mesh-gradient-bg',
    component: MeshGradientBg,
    category: 'abstract',
    previewTone: 'dark',
    summary: 'Blurred color masses blend and drift into a fluid gradient atmosphere.',
    detail: 'A versatile abstract layer that can swing futuristic, editorial, or soft-brand depending on palette choices.',
    tags: ['abstract', 'gradient', 'fluid', 'color'],
    useCases: ['Brand hero panels', 'Creative tools', 'Modern landing pages'],
    knobs: [
      { label: 'Color anchors', description: 'Swap the main gradient masses to quickly change the emotional tone of the scene.' },
      { label: 'Blur spread', description: 'Control how painterly or defined the blobs feel.' },
      { label: 'Drift overlap', description: 'Adjust travel ranges so the composition feels calmer or more volatile.' },
    ],
  }),
  defineBackground({
    slug: 'constellation-bg',
    name: 'Constellation',
    selector: 'app-constellation-bg',
    component: ConstellationBg,
    category: 'sci-fi',
    previewTone: 'dark',
    summary: 'Blinking star nodes connect with subtle lines to form a sci-fi map.',
    detail: 'Constellation suggests intelligence, networks, and navigation without requiring a full dashboard visual system.',
    tags: ['sci-fi', 'constellation', 'network', 'mapping'],
    useCases: ['AI products', 'Data narratives', 'Feature headers'],
    knobs: [
      { label: 'Link opacity', description: 'Reduce line contrast for a lighter technical feel or increase it for structure.' },
      { label: 'Node brightness', description: 'Tune the stars to keep the scene atmospheric or clearly diagrammatic.' },
      { label: 'Pattern spread', description: 'Reposition clusters to create denser focal areas or broader map coverage.' },
    ],
  }),
  defineBackground({
    slug: 'radar-rings-bg',
    name: 'Radar Rings',
    selector: 'app-radar-rings-bg',
    component: RadarRingsBg,
    category: 'sci-fi',
    previewTone: 'dark',
    summary: 'Concentric pulses and a rotating sweep evoke radar and scanning interfaces.',
    detail: 'Best used where the background should feel operational, tactical, or instrument-driven rather than decorative.',
    tags: ['sci-fi', 'radar', 'rings', 'tactical'],
    useCases: ['Security products', 'Ops dashboards', 'Mission-style demos'],
    knobs: [
      { label: 'Sweep cone', description: 'Adjust the size and opacity of the rotating cone to change how dominant the scan feels.' },
      { label: 'Pulse spacing', description: 'Tighter rings feel more technical, while wider spacing feels calmer and broader.' },
      { label: 'Loop duration', description: 'Speed up for urgency or slow down for deliberate instrumentation.' },
    ],
  }),
  defineBackground({
    slug: 'glitch-stripes-bg',
    name: 'Glitch Stripes',
    selector: 'app-glitch-stripes-bg',
    component: GlitchStripesBg,
    category: 'abstract',
    previewTone: 'dark',
    summary: 'Retro scanlines and glitch bands create low-fi digital interference.',
    detail: 'This is a strong stylistic effect, good for retro-tech, promo art, and creative demos where controlled noise is welcome.',
    tags: ['abstract', 'glitch', 'retro-tech', 'scanlines'],
    useCases: ['Poster pages', 'Creative launches', 'Experimental sections'],
    knobs: [
      { label: 'Noise intensity', description: 'Control how aggressive the distortion reads against content.' },
      { label: 'Band frequency', description: 'Adjust how often the glitch stripes appear to make the effect sparse or more unstable.' },
      { label: 'Color split', description: 'Introduce or reduce chromatic offsets for a cleaner or more broken screen feel.' },
    ],
  }),
  defineBackground({
    slug: 'prism-caustics-bg',
    name: 'Prism Caustics',
    selector: 'app-prism-caustics-bg',
    component: PrismCausticsBg,
    category: 'abstract',
    previewTone: 'dark',
    summary: 'Refracted light fans overlap like sunlight passing through glass and water.',
    detail: 'Prism Caustics feels luminous and premium, making it good for launches or design-forward product storytelling.',
    tags: ['abstract', 'caustics', 'glass', 'luminous'],
    useCases: ['Premium launches', 'Design showcases', 'Beauty and fashion hero blocks'],
    knobs: [
      { label: 'Fan angle', description: 'Change the spread of refracted beams to make the composition tighter or more radiant.' },
      { label: 'Color tint', description: 'Shift the refracted hues toward brand colors or keep them neutral and prismatic.' },
      { label: 'Overlay opacity', description: 'Lower the effect when typography needs more separation from the light fans.' },
    ],
  }),
  defineBackground({
    slug: 'topographic-flow-bg',
    name: 'Topographic Flow',
    selector: 'app-topographic-flow-bg',
    component: TopographicFlowBg,
    category: 'geometric',
    previewTone: 'dark',
    summary: 'Animated contour lines and drifting ridges feel like a living terrain map.',
    detail: 'This layer reads as both technical and organic, useful for product systems that need structure without rigid UI chrome.',
    tags: ['geometric', 'contours', 'topographic', 'terrain'],
    useCases: ['Mapping products', 'Strategy pages', 'Futuristic terrain visuals'],
    knobs: [
      { label: 'Contour density', description: 'Increase line density for a more complex map or reduce it for clearer negative space.' },
      { label: 'Motion drift', description: 'Adjust ridge travel to make the surface feel stable or visibly alive.' },
      { label: 'Stroke contrast', description: 'Tune line visibility depending on how much the contour system should lead the composition.' },
    ],
  }),
  defineBackground({
    slug: 'vortex-tunnel-bg',
    name: 'Vortex Tunnel',
    selector: 'app-vortex-tunnel-bg',
    component: VortexTunnelBg,
    category: 'sci-fi',
    previewTone: 'dark',
    summary: 'Concentric rings and a spinning beam form a portal-like tunnel illusion.',
    detail: 'Vortex Tunnel is one of the most dramatic layers in the set and works best when the background should feel immersive and high energy.',
    tags: ['sci-fi', 'portal', 'tunnel', 'depth'],
    useCases: ['Event intros', 'Game promos', 'High-energy demo screens'],
    knobs: [
      { label: 'Ring spacing', description: 'Tighter rings increase intensity; wider spacing makes the tunnel feel more spacious.' },
      { label: 'Center glow', description: 'Raise the focal brightness to make the portal more cinematic or lower it for subtler depth.' },
      { label: 'Spin rate', description: 'Tune rotational energy to control how dramatic the motion feels.' },
    ],
  }),
  defineBackground({
    slug: 'paper-cut-strata-bg',
    name: 'Paper Cut Strata',
    selector: 'app-paper-cut-strata-bg',
    component: PaperCutStrataBg,
    category: 'editorial',
    previewTone: 'dark',
    summary: 'Layered cut-paper hills and clouds create a crafted poster landscape.',
    detail: 'The shapes feel tactile and designed by hand, making this useful for editorial storytelling and poster-style campaign work.',
    tags: ['editorial', 'paper-cut', 'poster', 'craft'],
    useCases: ['Storytelling sections', 'Creative campaigns', 'Illustrative landings'],
    knobs: [
      { label: 'Layer depth', description: 'Change offsets and shadows to emphasize or soften the cut-paper illusion.' },
      { label: 'Palette warmth', description: 'Push the tones toward earthy or high-contrast poster colors.' },
      { label: 'Parallax speed', description: 'Tune the motion between layers for calm scenery or more obvious dimensionality.' },
    ],
  }),
  defineBackground({
    slug: 'halftone-pop-bg',
    name: 'Halftone Pop',
    selector: 'app-halftone-pop-bg',
    component: HalftonePopBg,
    category: 'editorial',
    previewTone: 'dark',
    summary: 'Comic dots, sticker forms, and burst shapes make a loud pop-art backdrop.',
    detail: 'Halftone Pop is intentionally graphic and energetic, best for campaigns or promos that want clear visual attitude.',
    tags: ['editorial', 'halftone', 'pop-art', 'graphic'],
    useCases: ['Promo banners', 'Campaign splashes', 'Youthful brand pages'],
    knobs: [
      { label: 'Dot scale', description: 'Adjust the halftone size to make the pattern read as fine print texture or bold poster art.' },
      { label: 'Burst count', description: 'Increase graphic elements for a louder composition or trim them back for more legibility.' },
      { label: 'Accent colors', description: 'Swap sticker and burst tones to align with the campaign palette.' },
    ],
  }),
  defineBackground({
    slug: 'liquid-chrome-bg',
    name: 'Liquid Chrome',
    selector: 'app-liquid-chrome-bg',
    component: LiquidChromeBg,
    category: 'abstract',
    previewTone: 'dark',
    summary: 'Reflective metallic blobs and highlights create a sleek futuristic surface.',
    detail: 'This layer is ideal for premium tech and concept launches where the background should feel polished, glossy, and product-adjacent.',
    tags: ['abstract', 'chrome', 'metallic', 'futuristic'],
    useCases: ['Premium tech launches', 'Concept pages', 'Device hero sections'],
    knobs: [
      { label: 'Blob scale', description: 'Make forms more sculptural or more restrained depending on how much chrome presence you want.' },
      { label: 'Highlight sheen', description: 'Adjust specular intensity for a softer satin read or sharper metallic flash.' },
      { label: 'Reflection tint', description: 'Introduce cooler or warmer reflections to match the product system.' },
    ],
  }),
  defineBackground({
    slug: 'solar-poster-bg',
    name: 'Solar Poster',
    selector: 'app-solar-poster-bg',
    component: SolarPosterBg,
    category: 'editorial',
    previewTone: 'dark',
    summary: 'Retro sunset bands and grain evoke screen-printed poster art.',
    detail: 'Solar Poster leans into nostalgia and strong graphic silhouette, making it suitable for retro-tech or branded event art.',
    tags: ['editorial', 'retro', 'sunset', 'poster'],
    useCases: ['Retro-tech themes', 'Festival pages', 'Campaign art treatments'],
    knobs: [
      { label: 'Band spacing', description: 'Adjust horizon band rhythm to create a flatter or more cinematic sunset profile.' },
      { label: 'Grain level', description: 'Reduce texture for cleaner digital output or raise it for poster authenticity.' },
      { label: 'Sky contrast', description: 'Tune tonal separation so headlines remain readable against the backdrop.' },
    ],
  }),
  defineBackground({
    slug: 'spotlight-stage-bg',
    name: 'Spotlight Stage',
    selector: 'app-spotlight-stage-bg',
    component: SpotlightStageBg,
    category: 'content',
    previewTone: 'dark',
    summary: 'A dark hero stage with a focused highlight zone for product imagery and CTA copy.',
    detail: 'This layer is tuned for real content, balancing spectacle with enough negative space for readable launches and hero banners.',
    tags: ['content-safe', 'hero', 'spotlight', 'product'],
    useCases: ['Product heroes', 'Launch banners', 'Reusable hero components'],
    knobs: [
      { label: 'Focus zone', description: 'Move or resize the bright stage area to better support product imagery or text lanes.' },
      { label: 'Edge falloff', description: 'Control how quickly the stage fades into the darker surroundings.' },
      { label: 'Highlight intensity', description: 'Tune the spotlight brightness to preserve contrast while keeping the product lifted.' },
    ],
  }),
  defineBackground({
    slug: 'editorial-frame-bg',
    name: 'Editorial Frame',
    selector: 'app-editorial-frame-bg',
    component: EditorialFrameBg,
    category: 'content',
    previewTone: 'light',
    summary: 'Paper-toned framing creates safe breathing room for headlines, portraits, and captions.',
    detail: 'This is a layout-first background that helps text and imagery feel art directed rather than simply placed on a neutral surface.',
    tags: ['content-safe', 'editorial', 'paper', 'frame'],
    useCases: ['Case studies', 'Interviews', 'Editorial features'],
    knobs: [
      { label: 'Frame thickness', description: 'Change the breathing room around the content block for tighter or more spacious layouts.' },
      { label: 'Paper tint', description: 'Adjust the base tone from cool editorial stock to warmer, more tactile paper.' },
      { label: 'Rule visibility', description: 'Tune lines and accents to keep the frame quiet or more graphically structured.' },
    ],
  }),
  defineBackground({
    slug: 'soft-vignette-bg',
    name: 'Soft Vignette',
    selector: 'app-soft-vignette-bg',
    component: SoftVignetteBg,
    category: 'content',
    previewTone: 'dark',
    summary: 'A cinematic low-noise vignette keeps the center readable while the edges carry mood.',
    detail: 'Soft Vignette is a utility-friendly content layer for headlines, stats, and supporting media that need calm, contrast-safe motion.',
    tags: ['content-safe', 'cinematic', 'vignette', 'readable'],
    useCases: ['Feature banners', 'Editorial heroes', 'High-contrast sections'],
    knobs: [
      { label: 'Center openness', description: 'Expand or tighten the clear reading zone depending on content density.' },
      { label: 'Edge depth', description: 'Increase vignette darkness for drama or reduce it for a flatter modern surface.' },
      { label: 'Noise softness', description: 'Tune the grain and blur to keep the texture invisible or slightly filmic.' },
    ],
  }),
  defineBackground({
    slug: 'sunwash-mesh-bg',
    name: 'Sunwash Mesh',
    selector: 'app-sunwash-mesh-bg',
    component: SunwashMeshBg,
    category: 'light',
    previewTone: 'light',
    summary: 'A pastel mesh with enough contrast discipline for bright content layouts.',
    detail: 'Sunwash Mesh supports long-form marketing copy and product cards while still feeling designed and softly animated.',
    tags: ['light', 'mesh', 'pastel', 'marketing'],
    useCases: ['Bright landing sections', 'Benefit blocks', 'Soft product intros'],
    knobs: [
      { label: 'Pastel palette', description: 'Shift the mesh anchors to move from airy spring tones to cleaner brand-led hues.' },
      { label: 'Blob position', description: 'Reposition the mesh peaks to support different focal zones in the layout.' },
      { label: 'Saturation', description: 'Lower saturation for quiet content blocks or raise it for more visible atmosphere.' },
    ],
  }),
  defineBackground({
    slug: 'blueprint-paper-bg',
    name: 'Blueprint Paper',
    selector: 'app-blueprint-paper-bg',
    component: BlueprintPaperBg,
    category: 'light',
    previewTone: 'light',
    summary: 'A structured paper-grid background for explanatory sections and comparison layouts.',
    detail: 'Blueprint Paper adds order and editorial structure without making the layout feel like a heavy app shell.',
    tags: ['light', 'paper', 'grid', 'structured'],
    useCases: ['Specs sections', 'Feature grids', 'Comparison layouts'],
    knobs: [
      { label: 'Grid contrast', description: 'Lighten or darken the paper rules depending on how visible the structure should be.' },
      { label: 'Paper warmth', description: 'Tune the base surface toward white stock or warm dossier paper.' },
      { label: 'Rule density', description: 'Adjust spacing to make the layout feel more technical or more editorial.' },
    ],
  }),
  defineBackground({
    slug: 'pricing-aura-bg',
    name: 'Pricing Aura',
    selector: 'app-pricing-aura-bg',
    component: PricingAuraBg,
    category: 'light',
    previewTone: 'light',
    summary: 'Soft highlights give pricing and offer cards a premium light-theme finish.',
    detail: 'Pricing Aura is optimized for cards and offers where the background should feel elevated without fighting plan details.',
    tags: ['light', 'pricing', 'card', 'premium'],
    useCases: ['Pricing tiers', 'Feature cards', 'Offer callouts'],
    knobs: [
      { label: 'Glow radius', description: 'Adjust the aura spread to make the card feel gently lifted or more premium and staged.' },
      { label: 'Highlight placement', description: 'Move the main glow to better support plan headers or product thumbnails.' },
      { label: 'Card contrast', description: 'Tune the surrounding surface so body copy and lists stay easy to scan.' },
    ],
  }),
  defineBackground({
    slug: 'silk-ribbon-bg',
    name: 'Silk Ribbon',
    selector: 'app-silk-ribbon-bg',
    component: SilkRibbonBg,
    category: 'luxury',
    previewTone: 'light',
    summary: 'Satin ribbons and metallic sheen create a polished flagship-launch surface.',
    detail: 'Silk Ribbon is tuned for premium product reveals and hero moments where motion should feel expensive, calm, and deliberate.',
    tags: ['luxury', 'satin', 'launch', 'premium'],
    useCases: ['Flagship reveals', 'Keynote heroes', 'Luxury product pages'],
    knobs: [
      { label: 'Ribbon arc', description: 'Change the sweep and curvature of the satin bands to alter how ceremonial the hero feels.' },
      { label: 'Sheen band', description: 'Tune the metallic highlight strength for softer satin or sharper product-launch gloss.' },
      { label: 'Champagne tint', description: 'Shift the color balance toward ivory, gold, or cooler pearl tones.' },
    ],
  }),
  defineBackground({
    slug: 'atelier-paper-bg',
    name: 'Atelier Paper',
    selector: 'app-atelier-paper-bg',
    component: AtelierPaperBg,
    category: 'luxury',
    previewTone: 'light',
    summary: 'Layered paper planes feel like a launch dossier or editorial product spread.',
    detail: 'Atelier Paper works when product storytelling needs structured columns, material notes, and composed editorial whitespace.',
    tags: ['luxury', 'paper', 'dossier', 'editorial'],
    useCases: ['Material stories', 'Launch notes', 'Product detail spreads'],
    knobs: [
      { label: 'Sheet offsets', description: 'Adjust layer overlap to make the surface flatter or more tactile and dimensional.' },
      { label: 'Paper shadow', description: 'Increase depth for a crafted dossier look or soften for cleaner editorial minimalism.' },
      { label: 'Warm highlight', description: 'Control the radial warmth that makes the layout feel premium and lit.' },
    ],
  }),
  defineBackground({
    slug: 'pearl-radial-bg',
    name: 'Pearl Radial',
    selector: 'app-pearl-radial-bg',
    component: PearlRadialBg,
    category: 'luxury',
    previewTone: 'light',
    summary: 'Pearl forms and creamy halos create a luminous premium-offer surface.',
    detail: 'Pearl Radial suits premium pricing, launch editions, and product cards that need a bright but clearly elevated finish.',
    tags: ['luxury', 'pearl', 'halo', 'offer'],
    useCases: ['Launch editions', 'Premium pricing', 'Signature product cards'],
    knobs: [
      { label: 'Halo brightness', description: 'Tune the central glow so the card feels gently luminous or more spotlighted.' },
      { label: 'Orb count', description: 'Adjust pearl density to keep the surface sparse and elegant or slightly richer.' },
      { label: 'Cream tone', description: 'Shift the base finish from cool pearl to warmer champagne light.' },
    ],
  }),
  defineBackground({
    slug: 'testimonial-spotlight-bg',
    name: 'Testimonial Spotlight',
    selector: 'app-testimonial-spotlight-bg',
    component: TestimonialSpotlightBg,
    category: 'image',
    previewTone: 'dark',
    summary: 'A dark spotlighted layout frames a portrait while keeping quote copy readable.',
    detail: 'This background is built around image-led testimonial sections where the portrait should feel intentional, not incidental.',
    tags: ['image', 'testimonial', 'portrait', 'spotlight'],
    useCases: ['Customer quotes', 'Founder stories', 'Case study hero blocks'],
    knobs: [
      { label: 'Portrait spotlight', description: 'Move the highlight so it better supports different crop positions and image ratios.' },
      { label: 'Quote lane width', description: 'Open up more room for long quotes or tighten the text surface for short testimonials.' },
      { label: 'Background falloff', description: 'Control how cinematic the surrounding darkness feels around the main subject.' },
    ],
  }),
  defineBackground({
    slug: 'team-mosaic-bg',
    name: 'Team Mosaic',
    selector: 'app-team-mosaic-bg',
    component: TeamMosaicBg,
    category: 'image',
    previewTone: 'light',
    summary: 'Layered light surfaces make team boards and profile imagery feel composed.',
    detail: 'Team Mosaic is tuned for sections with multiple faces, short bios, and compact culture or team narrative content.',
    tags: ['image', 'team', 'mosaic', 'profiles'],
    useCases: ['Team sections', 'Advisory boards', 'Leadership highlights'],
    knobs: [
      { label: 'Panel layering', description: 'Adjust shape overlap to make the mosaic feel more architectural or more minimal.' },
      { label: 'Accent geometry', description: 'Tune the decorative forms so they support portraits without becoming visual clutter.' },
      { label: 'Surface warmth', description: 'Shift the light palette toward cooler product tones or warmer brand storytelling.' },
    ],
  }),
  defineBackground({
    slug: 'feature-focus-bg',
    name: 'Feature Focus',
    selector: 'app-feature-focus-bg',
    component: FeatureFocusBg,
    category: 'image',
    previewTone: 'dark',
    summary: 'A strong media zone sits beside supporting copy, stats, and feature badges.',
    detail: 'Feature Focus is useful when the product visual, device frame, or dashboard shot should dominate the section without losing supporting copy.',
    tags: ['image', 'feature', 'dashboard', 'product'],
    useCases: ['Dashboard reveals', 'Device sections', 'Feature callouts'],
    knobs: [
      { label: 'Media frame size', description: 'Resize the dominant image zone depending on how much the product should lead the section.' },
      { label: 'Text lane contrast', description: 'Adjust the copy surface so badges and descriptive text remain crisp.' },
      { label: 'Glow accents', description: 'Raise or soften edge highlights to feel more technical or more premium.' },
    ],
  }),
];

const BACKGROUND_BY_SLUG = new Map(BACKGROUND_GALLERY_ITEMS.map(item => [item.slug, item]));

export function findBackgroundBySlug(slug: string | null | undefined): BackgroundGalleryItem | null {
  if (!slug) {
    return null;
  }

  return BACKGROUND_BY_SLUG.get(slug) ?? null;
}

export function getBackgroundFilterLabel(filter: BackgroundFilter): string {
  return BACKGROUND_FILTERS.find(item => item.value === filter)?.label ?? 'Backgrounds';
}

export function buildMinimalSnippet(selector: string): string {
  return `<${selector}></${selector}>`;
}

export function buildLayeredSnippet(selector: string): string {
  return [
    '<section class="hero-shell">',
    `  <${selector}></${selector}>`,
    '  <div class="hero-content">',
    '    <h2>Headline</h2>',
    '    <p>Copy, CTA buttons, or imagery can sit above the animated layer.</p>',
    '  </div>',
    '</section>',
  ].join('\n');
}
