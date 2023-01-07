import { Box, Link, Stack } from "@mui/material";
import {
  FileCodeIcon,
  MentionIcon,
  SponsorTiersIcon,
} from "@primer/octicons-react";
import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <Box component="footer" sx={{ py: 4 }}>
          <Stack spacing={4} direction="row" justifyContent="center">
            <Link
              href="https://xsalazar.com"
              color="textPrimary"
              aria-label="Contact Me"
              target="_blank"
              rel="noopener"
            >
              <MentionIcon size="small" verticalAlign="middle" />
            </Link>
            <Link
              href="https://github.com/xsalazar/wow-emoji"
              color="textPrimary"
              aria-label="Source Code"
              target="_blank"
              rel="noopener"
            >
              <FileCodeIcon size="small" verticalAlign="middle" />
            </Link>
            <Link
              href="https://github.com/sponsors/xsalazar"
              color="textPrimary"
              aria-label="Support Me"
              target="_blank"
              rel="noopener"
            >
              <SponsorTiersIcon size="small" verticalAlign="middle" />
            </Link>
          </Stack>
        </Box>
      </div>
    );
  }
}
