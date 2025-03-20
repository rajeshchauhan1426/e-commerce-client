"use client";

import React, { useEffect, useState } from "react";

interface FormatCurrencyOptions {
  value: number;
  currency: string;
  locale?: string;
}

const formatter = {
  format: (input: number | FormatCurrencyOptions): string => {
    if (typeof input === "number") {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
      }).format(input);
    }

    const { value, currency, locale } = input;
    try {
      return new Intl.NumberFormat(locale || "en-US", {
        style: "currency",
        currency: currency.toUpperCase(),
      }).format(value);
    } catch (error) {
      return `${currency.toUpperCase()} ${value.toFixed(2)}`;
    }
  },
};

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="font-semibold">
      {formatter.format(Number(value) || 0)}
    </div>
  );
};

export default Currency;
