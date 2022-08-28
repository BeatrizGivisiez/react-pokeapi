import React, { FC } from "react";
import { Box, Link, List, ListItem, Tooltip } from "@mui/material";

import { EnvelopeSimpleOpen, LinkedinLogo, GithubLogo } from "phosphor-react";
import { useStyles } from "./styles";

export const Footer: FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          p: 6,
        }}
        component="footer"
      >
        <List className={classes.footer__list}>
          <ListItem className={classes.footer__item}>
            <Tooltip title="E-mail">
              <Link href="mailto:beatriz.givisiez@hotmail.com" target="_blank">
                <EnvelopeSimpleOpen size={44} color="#fbc02d" />
              </Link>
            </Tooltip>
          </ListItem>

          <ListItem className={classes.footer__item}>
            <Tooltip title="LinkedIn">
              <Link
                href="https://www.linkedin.com/in/beatriz-givisiez/"
                target="_blank"
              >
                <LinkedinLogo size={40} color="#fbc02d" />
              </Link>
            </Tooltip>
          </ListItem>

          <ListItem className={classes.footer__item}>
            <Tooltip title="Github">
              <Link href="https://github.com/BeatrizGivisiez" target="_blank">
                <GithubLogo size={40} color="#fbc02d" />
              </Link>
            </Tooltip>
          </ListItem>
        </List>
      </Box>
    </>
  );
};
