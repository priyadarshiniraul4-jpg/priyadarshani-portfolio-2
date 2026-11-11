import React, { useState } from "react";
import { X, Activity, Users, Clock, Stethoscope, QrCode, RefreshCw, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface SmartCareSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SmartCareSimulatorModal: React.FC<SmartCareSimulatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [patients, setPatients] = useState<number>(167);
  const [doctorsReady, setDoctorsReady] = useState<number>(3);
  const [emergencySurge, setEmergencySurge] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string>("SCB-211");

  if (!isOpen) return null;

  // Real-time calculation logic
  const effectiveDoctors = Math.max(1, doctorsReady);
  const clearanceRatePerDoc = emergencySurge ? 8 : 12; // patients/hour per doctor
  const totalThroughputPerHour = effectiveDoctors * clearanceRatePerDoc;
  const calculatedWaitMinutes = Math.max(
    5,
    Math.round((patients / totalThroughputPerHour) * 60)
  );

  const capacityCap = 250;
  const crowdCapPercentage = Math.min(100, Math.round((patients / capacityCap) * 100));

  let crowdStatus = "Low";
  if (crowdCapPercentage > 85) {
    crowdStatus = "Critical Capacity - " + crowdCapPercentage + "%";
  } else if (crowdCapPercentage > 60) {
    crowdStatus = "Moderate - " + crowdCapPercentage + "% cap";
  }

  const generateNewToken = () => {
    const randomNum = Math.floor(100 + Math.random() * 900);
    const prefixes = ["SCB", "OPD", "GEN", "TRI"];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    setUserToken(`${prefix}-${randomNum}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0D1527] dark:bg-[#0D1527] bg-white border border-[#1E293B] dark:border-[#1E293B] border-slate-200 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-[0_0_60px_rgba(37,99,235,0.35)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1E293B] dark:border-[#1E293B] border-slate-200 bg-[#070B14]">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-[#2563EB]/25 border border-[#38BDF8]/30 text-[#38BDF8]">
              <Activity className="w-5 h-5" />
            </span>
            <div>
              <div className="font-display font-semibold text-sm sm:text-base text-white dark:text-white text-slate-900 flex items-center gap-2">
                <span>SMARTCARE Live Crowd & Queue Simulator</span>
                <span className="text-[11px] font-mono text-[#38BDF8] px-2 py-0.5 rounded bg-[#2563EB]/20 border border-[#38BDF8]/30">
                  Interactive AI Prediction UI
                </span>
              </div>
              <p className="text-xs text-[#94A3B8]">
                Test real-time OPD load balancing, estimated wait times, and virtual token generation.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close simulator"
            className="p-1.5 text-[#94A3B8] hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Simulator Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900">
          {/* Live Output Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#070B14] border border-[#1E293B]">
              <div className="flex items-center gap-1.5 text-xs text-[#94A3B8] mb-1">
                <Users className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Patients Waiting</span>
              </div>
              <div className="font-display font-bold text-2xl text-white tracking-tight">
                {patients}
              </div>
              <span className="text-[11px] font-mono text-[#94A3B8]/60">Live queue size</span>
            </div>

            <div className="p-4 rounded-xl bg-[#070B14] border border-[#1E293B]">
              <div className="flex items-center gap-1.5 text-xs text-[#94A3B8] mb-1">
                <Clock className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>Average Wait Time</span>
              </div>
              <div className="font-display font-bold text-2xl text-[#38BDF8] tracking-tight">
                {calculatedWaitMinutes} min
              </div>
              <span className="text-[11px] font-mono text-[#94A3B8]/60">Estimated delay</span>
            </div>

            <div className="p-4 rounded-xl bg-[#070B14] border border-[#1E293B]">
              <div className="flex items-center gap-1.5 text-xs text-[#94A3B8] mb-1">
                <Activity className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Hospital Crowd</span>
              </div>
              <div className="font-display font-semibold text-sm sm:text-base text-white tracking-tight truncate">
                {crowdStatus}
              </div>
              <div className="w-full bg-[#0D1527] h-1.5 rounded-full mt-2 overflow-hidden border border-[#1E293B]">
                <div
                  className="bg-gradient-to-r from-[#1D4ED8] to-[#38BDF8] h-full shadow-[0_0_8px_rgba(56,189,248,0.5)] transition-all duration-300"
                  style={{ width: `${crowdCapPercentage}%` }}
                />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#070B14] border border-[#1E293B]">
              <div className="flex items-center gap-1.5 text-xs text-[#94A3B8] mb-1">
                <Stethoscope className="w-3.5 h-3.5 text-[#93C5FD]" />
                <span>Doctors on Duty</span>
              </div>
              <div className="font-display font-bold text-2xl text-white tracking-tight">
                {doctorsReady} Ready | 2 Busy
              </div>
              <span className="text-[11px] font-mono text-[#94A3B8]/60">
                {totalThroughputPerHour} patients / hr velocity
              </span>
            </div>
          </div>

          {/* Interactive Controls Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {/* Left Controls */}
            <div className="space-y-6 bg-[#070B14] p-6 rounded-2xl border border-[#1E293B]">
              <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-white flex items-center gap-2">
                <span>Simulation Parameters</span>
              </h3>

              {/* Slider 1: Patients Waiting */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-[#94A3B8]">Patients in OPD Queue</span>
                  <span className="font-mono text-[#38BDF8] font-semibold">{patients} patients</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="280"
                  step="5"
                  value={patients}
                  onChange={(e) => setPatients(Number(e.target.value))}
                  className="w-full accent-[#38BDF8] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#94A3B8]/60 font-mono">
                  <span>40 (Calm)</span>
                  <span>167 (Live Baseline)</span>
                  <span>280 (High Surge)</span>
                </div>
              </div>

              {/* Slider 2: Doctors Active */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-[#94A3B8]">Active Doctors Available</span>
                  <span className="font-mono text-[#60A5FA] font-semibold">{doctorsReady} Doctors</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  value={doctorsReady}
                  onChange={(e) => setDoctorsReady(Number(e.target.value))}
                  className="w-full accent-[#38BDF8] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#94A3B8]/60 font-mono">
                  <span>1 Doctor (Bottleneck)</span>
                  <span>3 Doctors (Standard)</span>
                  <span>8 Doctors (Full Team)</span>
                </div>
              </div>

              {/* Toggle: Emergency Surge Mode */}
              <div className="flex items-center justify-between p-3.5 rounded-xl border border-[#1E293B] bg-[#0D1527]">
                <div>
                  <div className="text-xs font-semibold text-white">Emergency Priority Surge</div>
                  <div className="text-[11px] text-[#94A3B8]/80">Diverts doctor velocity toward urgent trauma care</div>
                </div>
                <button
                  type="button"
                  onClick={() => setEmergencySurge(!emergencySurge)}
                  className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                    emergencySurge ? "bg-[#2563EB] shadow-[0_0_12px_rgba(56,189,248,0.5)]" : "bg-neutral-800"
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                      emergencySurge ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Reset to Live Defaults */}
              <button
                onClick={() => {
                  setPatients(167);
                  setDoctorsReady(3);
                  setEmergencySurge(false);
                }}
                className="w-full py-2.5 rounded-xl border border-[#1E293B] text-xs font-mono text-[#94A3B8] hover:text-white hover:bg-[#0D1527] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Reset to Live Hospital Baseline</span>
              </button>
            </div>

            {/* Right: Instant Virtual QR Token Preview */}
            <div className="bg-[#070B14] p-6 rounded-2xl border border-[#1E293B] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-white flex items-center gap-2">
                    <QrCode className="w-4 h-4 text-[#38BDF8]" />
                    <span>Virtual Queue Token Generator</span>
                  </h3>
                  <button
                    onClick={generateNewToken}
                    className="text-[11px] font-mono text-[#38BDF8] hover:underline cursor-pointer"
                  >
                    Generate New
                  </button>
                </div>

                <div className="p-4 rounded-xl border border-dashed border-[#2563EB]/40 bg-[#0D1527]/60 flex items-center gap-5 mb-4 shadow-[0_0_20px_rgba(37,99,235,0.15)]">
                  {/* Mock QR visual */}
                  <div className="w-24 h-24 bg-white p-2 rounded-xl flex items-center justify-center shrink-0">
                    <div className="w-full h-full border-2 border-black grid grid-cols-4 grid-rows-4 gap-0.5 p-0.5">
                      <div className="bg-black" />
                      <div className="bg-black" />
                      <div className="bg-white" />
                      <div className="bg-black" />
                      <div className="bg-black" />
                      <div className="bg-white" />
                      <div className="bg-black" />
                      <div className="bg-white" />
                      <div className="bg-white" />
                      <div className="bg-black" />
                      <div className="bg-white" />
                      <div className="bg-black" />
                      <div className="bg-black" />
                      <div className="bg-black" />
                      <div className="bg-black" />
                      <div className="bg-black" />
                    </div>
                  </div>

                  {/* Token Details */}
                  <div className="space-y-1">
                    <div className="text-[11px] text-[#94A3B8]/80 font-mono">YOUR SMART TOKEN</div>
                    <div className="font-display font-bold text-2xl text-[#38BDF8]">{userToken}</div>
                    <div className="text-xs text-[#FFFFFF]">Queue Position: #12 Ahead</div>
                    <div className="text-xs text-[#60A5FA] font-medium">
                      Est. Call-in: {calculatedWaitMinutes} minutes
                    </div>
                  </div>
                </div>

                <div className="text-xs text-[#94A3B8]/80 leading-relaxed">
                  Patients scan this QR token at the hospital triage desk or check status remotely from their mobile phone, completely bypassing crowded waiting halls.
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1E293B] flex items-center justify-between">
                <span className="text-xs text-[#94A3B8]/70">Deployed on Netlify</span>
                <a
                  href={PORTFOLIO_DATA.projects.featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#38BDF8] font-semibold hover:underline"
                >
                  <span>Launch Live Full App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#1E293B] dark:border-[#1E293B] border-slate-200 bg-[#070B14] flex items-center justify-between text-xs text-[#94A3B8]">
          <span>SMARTCARE OPD Prediction Algorithm · Built by Priyadarshani Raul</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-white bg-[#2563EB]/30 hover:bg-[#2563EB]/50 border border-[#38BDF8]/30 transition-colors cursor-pointer"
          >
            Close Simulator
          </button>
        </div>
      </div>
    </div>
  );
};
