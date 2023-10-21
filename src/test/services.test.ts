// helpers.spec.js
import configService from "../services/configService";
import { describe, expect, test } from "vitest";

describe("configService", () => {
  test("configService should return algo", () => {
    expect(configService.getSidebarOptions()).not.toBeNull();
  });
});
