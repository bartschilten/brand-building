/** BLITS design system — window.Blits. React 18 components (no JSX needed). */
type Node = any;
export function Button(p: { variant?: 'primary' | 'secondary'; href?: string; type?: string; disabled?: boolean; onClick?: () => void; children: Node }): Node;
export function Heading(p: { size?: 'xl' | 'l' | 'm' | 's'; level?: 1 | 2 | 3 | 4; accent?: string; accentColor?: 'red' | 'green'; id?: string; children: Node }): Node;
export function PlaqueCard(p: { tone?: 'warm' | 'green' | 'grey' | 'ink'; size?: 'sm' | 'md' | 'lg'; title?: string; eyebrow?: string; media?: Node; backdrop?: Node; piping?: 'underline' | 'corners'; href?: string; land?: boolean; bounce?: boolean; children?: Node }): Node;
export function SpecPlate(p: { title?: string; logo?: string; rows: { label: string; value: string }[] }): Node;
export function Divider(): Node;
export function Marker(p: { children: string }): Node;
export function FieldLines(p: { type: 'football' | 'basketball' | 'trampoline' | 'track' | 'goal'; color?: string; opacity?: number; strokeWidth?: number; fit?: 'slice' | 'meet' }): Node;
export function Icon(p: { name: 'goal' | 'ball' | 'trampoline' | 'rebounder' | 'hoop' | 'size' | 'warranty' | 'delivery' | 'assembly' | 'norm' | 'weather' | 'box'; size?: number; strokeWidth?: number; title?: string }): Node;
export function ChalkDoodle(p: { name: 'hopscotch' | 'tictactoe' | 'goal' | 'arrows' | 'sun' | 'hoop'; color?: string; opacity?: number }): Node;
export function ChalkDivider(p: { color?: string }): Node;
export function FlipDigits(p: { value: string; unit?: string; label?: string; size?: 'sm'; animate?: boolean }): Node;
export function StampedShield(p: { size?: number; orientation?: 'portrait' | 'landscape'; src?: string; label?: string }): Node;
export function ChassisPlate(p: { title?: string; rows: { label: string; value: string }[] }): Node;
export function FilmStrip(p: { frames: { src?: string; alt?: string; label?: string; placeholder?: string }[]; caption?: string; start?: number; holes?: number }): Node;
export function Texture(p: { material?: 'concrete' | 'asphalt' | 'sand' | 'grass' | 'mud' | 'tartan' | 'puddle'; src?: string; shade?: number | false; strength?: number; as?: string; style?: object; children?: Node }): Node;
export function LanternHero(p: { eyebrow?: string; title?: Node; intro?: string; texture?: string; toggle?: boolean; label?: string; children?: Node }): Node;
/** Point logos/textures at a site's own files: configureAssets({ logos: { 'liggend-white': 'logo.png' }, textures: { asphalt: 'asfalt.jpg' } }) */
export function configureAssets(a: { logos?: Record<string, string>; textures?: Record<string, string> }): void;
