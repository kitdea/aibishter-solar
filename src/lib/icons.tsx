/**
 * Re-exports Lucide icons with `suppressHydrationWarning` baked in.
 * This prevents React hydration mismatches caused by browser extensions
 * (e.g. Dark Reader) that modify SVG attributes on the client before React loads.
 *
 * Add new icons here as needed — never import directly from "lucide-react" in pages/components.
 */

import {
  ArrowRight as _ArrowRight,
  ArrowUpRight as _ArrowUpRight,
  Award as _Award,
  Battery as _Battery,
  Calculator as _Calculator,
  Check as _Check,
  CheckCircle2 as _CheckCircle2,
  ChevronDown as _ChevronDown,
  ChevronRight as _ChevronRight,
  Clock as _Clock,
  Cpu as _Cpu,
  Info as _Info,
  Leaf as _Leaf,
  Mail as _Mail,
  MapPin as _MapPin,
  Menu as _Menu,
  Moon as _Moon,
  Phone as _Phone,
  Play as _Play,
  RefreshCw as _RefreshCw,
  ShieldCheck as _ShieldCheck,
  Sun as _Sun,
  ThermometerSun as _ThermometerSun,
  TrendingUp as _TrendingUp,
  Users as _Users,
  Wrench as _Wrench,
  X as _X,
  Zap as _Zap,
  type LucideProps,
} from "lucide-react";
import { ComponentType } from "react";

function wrap(Icon: ComponentType<LucideProps>) {
  const Wrapped = (props: LucideProps) => <Icon suppressHydrationWarning {...props} />;
  Wrapped.displayName = (Icon as { displayName?: string }).displayName ?? Icon.name;
  return Wrapped;
}

export const ArrowRight    = wrap(_ArrowRight);
export const ArrowUpRight  = wrap(_ArrowUpRight);
export const Award         = wrap(_Award);
export const Battery       = wrap(_Battery);
export const Calculator    = wrap(_Calculator);
export const Check         = wrap(_Check);
export const CheckCircle2  = wrap(_CheckCircle2);
export const ChevronDown   = wrap(_ChevronDown);
export const ChevronRight  = wrap(_ChevronRight);
export const Clock         = wrap(_Clock);
export const Cpu           = wrap(_Cpu);
export const Info          = wrap(_Info);
export const Leaf          = wrap(_Leaf);
export const Mail          = wrap(_Mail);
export const MapPin        = wrap(_MapPin);
export const Menu          = wrap(_Menu);
export const Moon          = wrap(_Moon);
export const Phone         = wrap(_Phone);
export const Play          = wrap(_Play);
export const RefreshCw     = wrap(_RefreshCw);
export const ShieldCheck   = wrap(_ShieldCheck);
export const Sun           = wrap(_Sun);
export const ThermometerSun = wrap(_ThermometerSun);
export const TrendingUp    = wrap(_TrendingUp);
export const Users         = wrap(_Users);
export const Wrench        = wrap(_Wrench);
export const X             = wrap(_X);
export const Zap           = wrap(_Zap);
